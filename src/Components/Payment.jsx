
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOut from './CheckOut';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);


const Payment = () => {

    return (
        <div className='max-w-xl mx-auto py-5'>
            <Elements stripe={stripePromise}>
                 <CheckOut></CheckOut>
            </Elements>


        </div>

    );
};

export default Payment;