import { supabase } from '@/integrations/supabase/client';

// Success and cancel URLs
const SUCCESS_URL = `${window.location.origin}/dashboard?payment_success=true`;
const CANCEL_URL = `${window.location.origin}/checkout?payment_canceled=true`;

// Your Stripe product ID
const PRODUCT_ID = 'prod_S0kBCt5bzNnIPt';

/**
 * Creates a Stripe checkout session using Supabase Edge Function
 * @param userId The current user's ID for tracking the purchase
 * @returns The URL to redirect to for Stripe Checkout
 */
export const createCheckoutSession = async (userId?: string): Promise<string> => {
  try {
    console.log("Creating checkout session for user:", userId);
    
    // Call the Supabase Edge Function to create a checkout session
    const { data, error } = await supabase.functions.invoke('create-checkout', {
      body: {
        product_id: PRODUCT_ID, // Use product ID instead of price ID
        success_url: SUCCESS_URL,
        cancel_url: CANCEL_URL,
        user_id: userId,
      },
    });

    if (error) {
      console.error('Error creating checkout session:', error);
      throw new Error(error.message);
    }

    if (!data || !data.url) {
      throw new Error('No checkout URL returned from server');
    }

    console.log("Checkout URL received:", data.url);
    return data.url;
  } catch (error) {
    console.error('Error in createCheckoutSession:', error);
    throw error;
  }
};

/**
 * Verifies a payment was successful using Supabase Edge Function
 * @param sessionId The Stripe checkout session ID
 * @returns Boolean indicating if payment was successful
 */
export const verifyPayment = async (sessionId: string): Promise<boolean> => {
  try {
    console.log("Verifying payment for session:", sessionId);
    
    const { data, error } = await supabase.functions.invoke('verify-payment', {
      body: { session_id: sessionId },
    });

    if (error) {
      console.error('Error verifying payment:', error);
      return false;
    }

    console.log("Payment verification result:", data);
    return data?.success === true;
  } catch (error) {
    console.error('Error in verifyPayment:', error);
    return false;
  }
};
