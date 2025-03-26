
import { supabase } from "@/integrations/supabase/client";

// This function will check if there's a successful payment for a given payment ID
export const verifyPaymentSuccess = async (paymentId: string): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from("payments")
      .select("payment_status")
      .eq("stripe_payment_id", paymentId)
      .single();

    if (error) {
      console.error("Error checking payment status:", error);
      return false;
    }

    return data.payment_status === "succeeded";
  } catch (error) {
    console.error("Payment verification error:", error);
    return false;
  }
};

// Check if payment was successful using URL params from Stripe redirect
export const checkPaymentFromUrl = async (searchParams: URLSearchParams) => {
  const paymentIntent = searchParams.get("payment_intent");
  
  if (!paymentIntent) {
    return false;
  }
  
  return await verifyPaymentSuccess(paymentIntent);
};
