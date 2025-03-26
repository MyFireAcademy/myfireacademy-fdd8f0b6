
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Stripe } from "https://esm.sh/stripe@14.19.0?target=deno";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY");
    const STRIPE_WEBHOOK_SECRET = Deno.env.get("STRIPE_WEBHOOK_SECRET");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "https://jlqhpccootrwvslvstdm.supabase.co";
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!STRIPE_SECRET_KEY) {
      throw new Error("Missing STRIPE_SECRET_KEY env variable");
    }

    if (!SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY env variable");
    }

    // Initialize Stripe
    const stripe = new Stripe(STRIPE_SECRET_KEY, {
      apiVersion: "2023-10-16",
      httpClient: Stripe.createFetchHttpClient(),
    });

    // Initialize Supabase client with admin privileges
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Get the signature from the headers
    const signature = req.headers.get("stripe-signature");
    
    // Get the raw body as text
    const body = await req.text();
    let event;
    
    // Verify signature if webhook secret is provided
    if (STRIPE_WEBHOOK_SECRET && signature) {
      try {
        event = stripe.webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET);
      } catch (err) {
        console.error(`⚠️ Webhook signature verification failed.`, err.message);
        return new Response(JSON.stringify({ error: `Webhook Error: ${err.message}` }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    } else {
      // For testing: parse the event from the body
      event = JSON.parse(body);
    }
    
    console.log(`Processing Stripe event: ${event.type}`);

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        console.log("Checkout session completed:", session.id);
        
        // Extract user metadata if available
        const clientReferenceId = session.client_reference_id;
        const userId = clientReferenceId || session.metadata?.user_id || null;
        
        if (!userId) {
          console.warn("No user ID found in session:", session.id);
        } else {
          console.log(`Processing completed checkout for user: ${userId}`);
        }
        
        // Store the payment information in our database
        const { error } = await supabase.from("payments").insert({
          stripe_payment_id: session.payment_intent,
          stripe_customer_id: session.customer,
          stripe_session_id: session.id,
          amount: session.amount_total / 100, // Stripe amounts are in cents
          currency: session.currency,
          payment_status: "succeeded",
          user_id: userId,
        });

        if (error) {
          console.error("Error inserting payment record:", error);
          throw error;
        }

        console.log(`Payment session ${session.id} completed successfully for user ${userId}`);
        break;
      }
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object;
        console.log("Payment intent succeeded:", paymentIntent.id);
        
        // Extract user metadata if available
        const userId = paymentIntent.metadata?.user_id || null;
        
        if (!userId) {
          console.warn("No user ID found in payment intent:", paymentIntent.id);
        } else {
          console.log(`Processing succeeded payment intent for user: ${userId}`);
        }
        
        // First check if a record already exists
        const { data: existingData } = await supabase
          .from("payments")
          .select("*")
          .eq("stripe_payment_id", paymentIntent.id);
          
        if (existingData && existingData.length > 0) {
          console.log("Updating existing payment record:", paymentIntent.id);
          // Update existing record
          const { error } = await supabase
            .from("payments")
            .update({ 
              payment_status: "succeeded",
              user_id: userId || existingData[0].user_id
            })
            .eq("stripe_payment_id", paymentIntent.id);

          if (error) {
            console.error("Error updating payment record:", error);
          }
        } else {
          console.log("Creating new payment record for:", paymentIntent.id);
          // Create a new record
          const { error } = await supabase.from("payments").insert({
            stripe_payment_id: paymentIntent.id,
            stripe_customer_id: paymentIntent.customer,
            amount: paymentIntent.amount / 100,
            currency: paymentIntent.currency,
            payment_status: "succeeded",
            user_id: userId,
          });

          if (error) {
            console.error("Error inserting payment record:", error);
          }
        }
        break;
      }
      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object;
        console.log("Payment intent failed:", paymentIntent.id);
        
        // Update payment record to failed
        const { error } = await supabase
          .from("payments")
          .update({ payment_status: "failed" })
          .eq("stripe_payment_id", paymentIntent.id);

        if (error) {
          console.error("Error updating payment record:", error);
        }
        break;
      }
      // Add other event types as needed
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
