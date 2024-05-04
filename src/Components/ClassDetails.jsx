import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ClassDetails = () => {
    const clsdetails = useLoaderData();
    const { description, email, image, name, price, title } = clsdetails;
    return (
        <div className="card p-5 rounded-sm bg-base-100 shadow-xl  mx-auto ">
            <figure><img className='w-full h-96 object-cover' src={image} alt=" " /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{title}</p>
                <strong>price :$ {price}</strong>
                <p>{description}</p>
                <div className="card-actions  ">
                    <Link to={`/payment`}><button className="btn w-full hover:bg-blue-600 text-white btn-info">Pay</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;