
import { supabase } from "@/integrations/supabase/client";
import { verifyPayment, verifyPaymentIntent } from "@/utils/stripe";

// This function will check if there's a successful payment for a given payment ID
export const verifyPaymentSuccess = async (paymentId: string): Promise<boolean> => {
  try {
    // Query the payments table to check if the payment was successful
    const { data, error } = await supabase
      .from("payments")
      .select("payment_status")
      .eq("stripe_payment_id", paymentId)
      .single();

    if (error) {
      console.error("Error checking payment status:", error);
      return false;
    }

    // Return true if payment status is "succeeded"
    return data.payment_status === "succeeded";
  } catch (error) {
    console.error("Payment verification error:", error);
    return false;
  }
};

// Check if payment was successful using URL params from Stripe redirect
export const checkPaymentFromUrl = async (searchParams: URLSearchParams, userId?: string) => {
  // Get all the possible payment identifiers from the URL
  const sessionId = searchParams.get("session_id");
  const paymentIntent = searchParams.get("payment_intent");
  const redirectStatus = searchParams.get("redirect_status");
  const paymentSuccess = searchParams.get("payment_success");
  
  console.log("Payment verification from URL:", {
    sessionId,
    paymentIntent,
    redirectStatus,
    paymentSuccess,
    userId
  });
  
  // If payment_success is set to true, we can verify from our database
  if (paymentSuccess === "true") {
    if (userId) {
      // Check if user has a valid payment in our database
      const { data, error } = await supabase
        .from("payments")
        .select("*")
        .eq("user_id", userId)
        .eq("payment_status", "succeeded")
        .maybeSingle();
      
      if (error && error.code !== 'PGRST116') {
        console.error("Error checking payment status:", error);
        return false;
      }
      
      if (data) {
        console.log("Found successful payment in database:", data);
        return true;
      }
    }
  }
  
  // If we have a session ID, verify through Stripe
  if (sessionId) {
    return await verifyPayment(sessionId, userId);
  }
  
  // If we have a payment intent, verify through Stripe
  if (paymentIntent) {
    return await verifyPaymentIntent(paymentIntent, userId);
  }
  
  // If redirect_status is "succeeded", that's a good sign
  if (redirectStatus === "succeeded") {
    return true;
  }
  
  // No payment identifiers found
  return false;
};

// Check if user has an active subscription
export const checkUserSubscription = async (userId?: string): Promise<boolean> => {
  if (!userId) return false;
  
  try {
    console.log("Checking subscription for user:", userId);
    
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .eq('user_id', userId)
      .eq('payment_status', 'succeeded')
      .maybeSingle();
    
    if (error && error.code !== 'PGRST116') {
      console.error('Error checking subscription:', error);
      return false;
    }
    
    if (data) {
      console.log("User has an active subscription:", data);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error checking subscription status:', error);
    return false;
  }
};
