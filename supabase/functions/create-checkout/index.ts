
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Stripe } from "https://esm.sh/stripe@14.19.0?target=deno";

// Initialize Stripe with the secret key from environment variables
const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2023-10-16",
  httpClient: Stripe.createFetchHttpClient(),
});

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
    const { product_id, success_url, cancel_url, user_id } = await req.json();

    console.log("Creating checkout session with:", { product_id, user_id });

    if (!product_id) {
      throw new Error("Product ID is required");
    }

    // Get the default price for the product
    const product = await stripe.products.retrieve(product_id);
    console.log("Product retrieved:", product.id, "Default price:", product.default_price);

    if (!product.default_price) {
      throw new Error("Product does not have a default price");
    }

    // Create the checkout session with the default price
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "google_pay", "apple_pay"], // Add apple_pay here
      line_items: [
        {
          price: product.default_price as string,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: success_url,
      cancel_url: cancel_url,
      client_reference_id: user_id || undefined, // Track the user ID
      metadata: {
        user_id: user_id || "",
      },
    });

    console.log("Checkout session created:", session.id);

    // Return the session URL
    return new Response(
      JSON.stringify({ url: session.url }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error creating checkout session:", error);
    
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
