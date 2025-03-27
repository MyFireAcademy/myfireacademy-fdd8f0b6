import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Stripe } from "https://esm.sh/stripe@14.19.0?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

// Initialize Stripe with the secret key from environment variables
const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2023-10-16",
  httpClient: Stripe.createFetchHttpClient(),
});

// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "https://jlqhpccootrwvslvstdm.supabase.co";
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Set up CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse the request body
    const requestData = await req.json();
    const { session_id, payment_intent, user_id } = requestData;

    // Check if we have a session_id or payment_intent
    if (!session_id && !payment_intent) {
      throw new Error("No session ID or payment intent provided");
    }

    console.log(`Verifying payment for ${session_id ? 'session: ' + session_id : 'payment_intent: ' + payment_intent}`);
    
    let isPaid = false;
    let sessionData = null;

    // If we have a session ID, check that first
    if (session_id) {
      // Retrieve the session from Stripe
      const session = await stripe.checkout.sessions.retrieve(session_id);
      
      console.log("Session retrieved:", {
        id: session.id,
        payment_status: session.payment_status,
        client_reference_id: session.client_reference_id
      });
      
      // Check if the payment status is paid
      isPaid = session.payment_status === "paid";
      sessionData = session;
    } 
    // If we have a payment intent, check that
    else if (payment_intent) {
      // Retrieve the payment intent from Stripe
      const intent = await stripe.paymentIntents.retrieve(payment_intent);
      
      console.log("Payment intent retrieved:", {
        id: intent.id,
        status: intent.status
      });
      
      // Check if the payment status is succeeded
      isPaid = intent.status === "succeeded";
      
      // Also check our database
      const { data: paymentData } = await supabase
        .from("payments")
        .select("*")
        .eq("stripe_payment_id", payment_intent)
        .eq("payment_status", "succeeded")
        .maybeSingle();
        
      if (paymentData) {
        console.log("Found payment record in database:", paymentData.id);
        isPaid = true;
      }
    }
    
    // If payment is verified and we have a user ID, store it
    if (isPaid && user_id) {
      console.log(`Payment verified for user ${user_id}. Ensuring database record exists.`);
      
      // Check if payment already exists
      const { data: existingPayment } = await supabase
        .from("payments")
        .select("*")
        .eq("user_id", user_id)
        .eq("payment_status", "succeeded")
        .maybeSingle();
        
      if (!existingPayment) {
        // Create payment record if it doesn't exist
        const paymentData = {
          user_id,
          stripe_session_id: session_id || null,
          stripe_payment_id: payment_intent || (sessionData?.payment_intent as string) || null,
          amount: sessionData?.amount_total ? sessionData.amount_total / 100 : 47.00, // Default to product price if not available
          payment_status: "succeeded",
          created_at: new Date().toISOString(),
        };
        
        const { error } = await supabase.from("payments").insert(paymentData);

        if (error) {
          console.error("Error storing payment information:", error);
        } else {
          console.log("Payment information stored successfully");
        }
      } else {
        console.log("Payment record already exists for this user:", existingPayment.id);
      }
    }

    // Return the payment status
    return new Response(
      JSON.stringify({ 
        success: isPaid,
        payment_status: sessionData?.payment_status || (isPaid ? "succeeded" : "failed")
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error verifying payment:", error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
