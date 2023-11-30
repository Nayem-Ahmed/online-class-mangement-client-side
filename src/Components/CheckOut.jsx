import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log('[error]', error);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          }
    
      
    }
    return (
        <form className='bg-blue-400 p-9 rounded-md' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                 color: '#424770',
                '::placeholder': {
                  color: 'white',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-secondary mt-10' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
};

export default CheckOut;