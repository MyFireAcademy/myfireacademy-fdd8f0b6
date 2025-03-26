
import { ReactNode } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Replace with your own publishable key
const stripePromise = loadStripe('pk_test_51O5XyOKqzGq23456TcTjBzFJ60UQn7eE7eo8CEHlYtg0OCaOcMieDLNLN2nkgkE8IUXH5EoPK12gRs1uEjnWu9Pu0093IFXbLZ');

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
