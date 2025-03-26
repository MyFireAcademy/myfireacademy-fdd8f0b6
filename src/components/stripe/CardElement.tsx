
import { useState } from 'react';
import { CardElement as StripeCardElement } from '@stripe/react-stripe-js';

interface CardElementProps {
  onChange: (event: any) => void;
}

const CardElement = ({ onChange }: CardElementProps) => {
  const [focused, setFocused] = useState(false);
  
  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Inter", sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#a0aec0',
        },
      },
      invalid: {
        color: '#e53e3e',
        iconColor: '#e53e3e',
      },
    },
  };

  return (
    <div className={`p-4 border rounded-md transition-all ${focused ? 'border-fire-500 ring-2 ring-fire-100' : 'border-gray-300'}`}>
      <StripeCardElement
        options={cardStyle}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

export default CardElement;
