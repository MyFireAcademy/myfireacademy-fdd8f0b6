import { supabase } from "@/integrations/supabase/client";

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
export const checkPaymentFromUrl = async (searchParams: URLSearchParams) => {
  const paymentIntent = searchParams.get("payment_intent");
  const redirectStatus = searchParams.get("redirect_status");
  
  console.log("Payment Intent:", paymentIntent);
  console.log("Redirect Status:", redirectStatus);
  
  // Check if we have a payment_intent OR if redirect_status is "succeeded"
  if (!paymentIntent && redirectStatus !== "succeeded") {
    return false;
  }
  
  // If we have a redirect_status of "succeeded", we can directly return true
  if (redirectStatus === "succeeded") {
    return true;
  }
  
  // Otherwise check the database
  return await verifyPaymentSuccess(paymentIntent as string);
};
