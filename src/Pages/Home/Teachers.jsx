import React from 'react';
import tphoto from '../../assets/p1.png'
import tphoto2 from '../../assets/p2.png'
import tphoto3 from '../../assets/p3.png'
import tphoto4 from '../../assets/p4.png'
import './Teacher.css'

const Teachers = () => {
    return (
        <div>
            <div className='max-w-lg mx-auto text-center'>
                <h1 className='md:text-2xl font-semibold mb-3'>Classes Taught by Real Creators</h1>
                <p className='text-gray-500'>Online education is a flexible instructional delivery system that encompasses any kind of learning that takes place via the Internet.</p>
            </div>
            <div className='grid md:grid-cols-4 gap-3 mt-5 mb-5 p-4 justify-center  '>
                <div className='teacher-card'>
                    <img className='w-[100%]' src={tphoto} alt="" />
                    <h1>Dianne Ameter</h1>
                    <p>Mathematics</p>
                </div>
                <div className='teacher-card'>
                    <img className='w-[100%]' src={tphoto2} alt="" />
                    <h1>Hugh Saturation</h1>
                    <p>Social Studies</p>
                </div>
                <div className='teacher-card'>
                    <img className='w-[100%]' src={tphoto3} alt="" />
                    <h1>Jim Séchen</h1>
                    <p>Physical Education</p>
                </div>
                <div className='teacher-card'>
                    <img className='w-[100%]' src={tphoto4} alt="" />
                    <h1>Eric Widget</h1>
                    <p>Illustrator</p>
                </div>
            </div>

        </div>
    );
};

export default Teachers;