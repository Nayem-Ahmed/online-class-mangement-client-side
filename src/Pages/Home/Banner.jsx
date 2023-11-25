import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-[90vh]" style={{ backgroundImage: 'url(https://i.ibb.co/mz20PQY/edu-3.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 md:text-2xl font-bold">Empowering Education Through Efficient Class Management</h1>
                    <p className="mb-5">
                        "Empower Learning, Simplify Administration: Your Gateway to Seamless Student and Class Management".</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;