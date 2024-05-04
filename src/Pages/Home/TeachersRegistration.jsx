import React from 'react';
import { Link } from 'react-router-dom';

const TeachersRegistration = () => {
    return (
        <div className='flex gap-6 items-center my-6 p-5 flex-col md:flex-row'>
            <div className='flex-1'>
                <img src="https://i.ibb.co/KDKFkjf/instructor-1x-v3.jpg" alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='md:text-4xl md:font-semibold mb-3'>Join Us as a Teacher</h2>
                <p className='md:text-xl mb-4 text-gray-500'>Unlock the opportunity to share your knowledge and expertise with students worldwide.</p>
                <Link to = '/tech'><button className='btn  bg-blue-500 text-white md:font-semibold hover:bg-blue-800'>Start Teaching Today</button></Link>
            </div>
        </div>
    );
};

export default TeachersRegistration;