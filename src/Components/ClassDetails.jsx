import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ClassDetails = () => {
    const clsdetails = useLoaderData();
    const { description, email, image, name, price, title } = clsdetails;
    return (
        <div className="card w-96 bg-base-100 shadow-xl  mx-auto my-8">
            <figure><img className='w-full' src={image} alt=" " /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{title}</p>
                <strong>price :$ {price}</strong>
                <p>{description}</p>
                <div className="card-actions  ">
                    <button className="btn hover:bg-blue-600 text-white btn-info">Pay</button>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;