import React from 'react';
import './banner.css'
const Banner = () => {
    return (
        <div className="hero h-[100vh]" style={{ backgroundImage: 'url(https://i.ibb.co/mz20PQY/edu-3.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div class="max-w-3xl reveal-container">
                    <h1 class="mb-5 md:text-4xl text-2xl font-bold reveal-content">Empowering Education Through Efficient Class Management</h1>
                    <p class="mb-5 text-gray-300 max-w-md mx-auto">"Empower Learning, Simplify Administration: Your Gateway to Seamless Student and Class Management".</p>
                </div>

            </div>
        </div>
    );
};

export default Banner;