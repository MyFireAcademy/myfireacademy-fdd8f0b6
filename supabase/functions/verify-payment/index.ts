
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
    const { session_id } = await req.json();

    if (!session_id) {
      throw new Error("No session ID provided");
    }

    console.log("Verifying payment for session:", session_id);

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(session_id);
    
    console.log("Session retrieved:", {
      id: session.id,
      payment_status: session.payment_status,
      client_reference_id: session.client_reference_id
    });
    
    // Check if the payment status is paid
    const isPaid = session.payment_status === "paid";
    
    if (isPaid && session.client_reference_id) {
      console.log("Payment succeeded, storing in database");
      
      // Store payment information in the database
      const { error } = await supabase.from("payments").insert({
        user_id: session.client_reference_id,
        stripe_session_id: session.id,
        stripe_payment_id: session.payment_intent as string,
        amount: session.amount_total ? session.amount_total / 100 : 0,
        payment_status: "succeeded",
        created_at: new Date().toISOString(),
      });

      if (error) {
        console.error("Error storing payment information:", error);
      } else {
        console.log("Payment information stored successfully");
      }
    }

    // Return the payment status
    return new Response(
      JSON.stringify({ 
        success: isPaid,
        payment_status: session.payment_status 
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
