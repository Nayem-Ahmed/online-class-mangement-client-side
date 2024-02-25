import React from 'react';
import aim from '../../assets/about.jpg'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdPlayArrow } from "react-icons/md";
import './about.css';


const About = () => {
    return (

        <div className='flex flex-col lg:flex-row md:flex-row justify-center gap-10 p-5 my-8'>
            <div className='left-div'>
                <img src={aim} alt="" />
                <div className='animation-div'>
                    <MdPlayArrow />
                </div>
            </div>

            <div>
                <p className='my-4'>SELF DEVELOPMENT COURSE</p>
                <h1 className='text-3xl font-bold mb-4'>Get Instant Access To Expert solution</h1>
                <p className='text-gray-500 mb-7'>The ultimate planning solution for busy women who want to reach their personal goals.Effortless comfortable eye-catching unique detail</p>
                <div className='flex gap-3 items-center'>
                    <FaCheck ></FaCheck><span className='font-medium'>Powerful Audiance</span>
                </div>
                <div className='flex gap-3 items-center'>
                    <FaCheck ></FaCheck><span className='font-medium'>Powerful Audiance</span>
                </div>

                <div className='flex gap-3 items-center'><FaCheck ></FaCheck><span className='font-medium'>Premium Content Worldwide</span></div>
                <Link to='classes'>
                    <button
                        type="submit"
                        class="bg-blue-500 mt-6 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-semibold py-2 px-4 rounded-md shadow-md"
                    >
                        Our Courses
                    </button></Link>
            </div>
        </div>

    );
};

export default About;