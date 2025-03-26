
import { ReactNode } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Using the provided live publishable key
const stripePromise = loadStripe('pk_live_51R6i9NBpZN4MXkQMRvpsxvyBUhzHYoSD5fCcrH8hvyetTUqDGJGvIhsSXJFZgWshm8nCe2dMhGThDGPct1O0rI7x00adig3fwi');

interface StripeProviderProps {
  children: ReactNode;
}

const StripeProvider = ({ children }: StripeProviderProps) => {
  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  );
};

export default StripeProvider;
