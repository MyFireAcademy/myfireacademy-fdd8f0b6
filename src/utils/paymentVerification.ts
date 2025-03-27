
import { verifyPayment, verifyPaymentIntent } from '@/utils/stripe';
import { supabase } from '@/integrations/supabase/client';

// Cache for subscription checks to prevent redundant API calls
const subscriptionCache = new Map<string, { hasSubscription: boolean, timestamp: number }>();
// Cache expiration time: 5 minutes
const CACHE_EXPIRATION = 5 * 60 * 1000;

/**
 * Check payment parameters from URL
 * @param searchParams URL search parameters
 * @param userId User ID
 * @returns Boolean indicating if payment was verified
 */
export const checkPaymentFromUrl = async (searchParams: URLSearchParams, userId?: string): Promise<boolean> => {
  try {
    // Check for session_id first (direct from Stripe)
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      return await verifyPayment(sessionId, userId);
    }
    
    // Check for payment_intent (from Stripe webhook)
    const paymentIntent = searchParams.get('payment_intent');
    if (paymentIntent) {
      return await verifyPaymentIntent(paymentIntent, userId);
    }
    
    // Check for payment_success (internal redirect)
    const paymentSuccess = searchParams.get('payment_success');
    if (paymentSuccess === 'true') {
      if (userId) {
        // Verify the user has a subscription in the database
        return await checkUserSubscription(userId);
      }
      // For demo or testing, allow access with payment_success
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error checking payment from URL:', error);
    return false;
  }
};

/**
 * Check if a user has an active subscription
 * @param userId User ID to check
 * @returns Boolean indicating if the user has an active subscription
 */
export const checkUserSubscription = async (userId: string): Promise<boolean> => {
  if (!userId) return false;
  
  // Check cache first
  const cacheEntry = subscriptionCache.get(userId);
  if (cacheEntry && (Date.now() - cacheEntry.timestamp < CACHE_EXPIRATION)) {
    console.log("Using cached subscription status for user:", userId);
    return cacheEntry.hasSubscription;
  }
  
  console.log("Checking subscription for user:", userId);
  
  try {
    // Check for a payment record in Supabase
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .eq('user_id', userId)
      .eq('payment_status', 'succeeded')
      .maybeSingle();
    
    if (error) {
      console.error('Error checking subscription:', error);
      subscriptionCache.set(userId, { hasSubscription: false, timestamp: Date.now() });
      return false;
    }
    
    const hasSubscription = !!data;
    
    // Cache the result
    subscriptionCache.set(userId, { hasSubscription, timestamp: Date.now() });
    
    // If not found in payments, create a demo access
    if (!hasSubscription) {
      // This is a non-destructive fallback for testing purposes
      // Remove this in production or when payment system is fully implemented
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('username')
        .eq('id', userId)
        .maybeSingle();
      
      if (!profileError && profileData?.username && profileData.username.includes('test')) {
        console.log("Creating demo access for test account:", userId);
        subscriptionCache.set(userId, { hasSubscription: true, timestamp: Date.now() });
        return true;
      }
    }
    
    return hasSubscription;
  } catch (error) {
    console.error('Error in checkUserSubscription:', error);
    subscriptionCache.set(userId, { hasSubscription: false, timestamp: Date.now() });
    return false;
  }
};

/**
 * Clear the subscription cache for a specific user or all users
 * @param userId Optional user ID to clear cache for specific user
 */
export const clearSubscriptionCache = (userId?: string) => {
  if (userId) {
    subscriptionCache.delete(userId);
  } else {
    subscriptionCache.clear();
  }
};
