
import { supabase } from '@/integrations/supabase/client';

// Success and cancel URLs
const SUCCESS_URL = `${window.location.origin}/dashboard?payment_success=true`;
const CANCEL_URL = `${window.location.origin}/checkout?payment_canceled=true`;

/**
 * Creates a Stripe checkout session using Supabase Edge Function
 * @param userId The current user's ID for tracking the purchase
 * @returns The URL to redirect to for Stripe Checkout
 */
export const createCheckoutSession = async (userId?: string): Promise<string> => {
  try {
    // Call the Supabase Edge Function to create a checkout session
    const { data, error } = await supabase.functions.invoke('create-checkout', {
      body: {
        price: 'price_1OqjgvKqzGq23456Bj8UdLLt', // Replace with your actual price ID
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
    const { data, error } = await supabase.functions.invoke('verify-payment', {
      body: { session_id: sessionId },
    });

    if (error) {
      console.error('Error verifying payment:', error);
      return false;
    }

    return data?.success === true;
  } catch (error) {
    console.error('Error in verifyPayment:', error);
    return false;
  }
};
