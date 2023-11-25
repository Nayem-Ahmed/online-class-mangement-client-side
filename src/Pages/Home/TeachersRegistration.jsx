import React from 'react';
import { Link } from 'react-router-dom';

const TeachersRegistration = () => {
    return (
        <div className='flex gap-6 items-center my-6 p-4 flex-col md:flex-row'>
            <div className='flex-1'>
                <img src="https://i.ibb.co/KDKFkjf/instructor-1x-v3.jpg" alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='md:text-3xl md:font-semibold mb-3'>Join Us as a Teacher</h2>
                <p className='md:text-2xl mb-3'>Unlock the opportunity to share your knowledge and expertise with students worldwide.</p>
                <Link to = '/tech'><button className='btn btn-info text-white md:font-semibold hover:bg-blue-700'>Start Teaching Today</button></Link>
            </div>
        </div>
    );
};

export default TeachersRegistration;