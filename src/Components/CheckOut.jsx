import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../Hook/useAxiosSecure';
import axios from 'axios';

const CheckOut = () => {
  const [data, setData] = useState();
  const [clientSecret, seClientSecret] = useState();
    const [error,setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
  

    useEffect(()=>{
      axiosSecure.post("/create-payment-intent")
      .then(res=>{
        console.log(res.data.clientSecret);
      })

    },[])

    useEffect(() => {
      axios.get('/addclass')
          .then(response => {
              console.log('Data:', response.data);
              setData(response.data);
          })
          .catch(error => {
              console.error('Error:', error);
          });

  }, []);

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
            setError(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
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
        <button className='btn btn-secondary mt-10' type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
 
            <p className='text-red-500'>{error}</p>
 
      </form>
    );
};

export default CheckOut;