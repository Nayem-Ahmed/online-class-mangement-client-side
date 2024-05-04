import React from 'react';
import CountUp from 'react-countup';
import cpho from '../../../src/assets/f5.png'
import cpho4 from '../../../src/assets/f4.png'
import cpho6 from '../../../src/assets/f6.png'


const Counter = () => {
    return (
        <div className='bg-gray-50 md:p-10 p-5 my-6'>

            <div className='flex justify-between text-center mx-auto'>
                <div className=''>
                    <button className="btn-lg  bg-white btn-circle  ">
                        <img className='w-16 text-center mx-auto' src={cpho4} alt="" />
                    </button><br></br>
                    <CountUp className='text-xl font-semibold' delay={2} end={100000} />+
                    <p className='mt-4'>Udacity graduations and <br></br> counting</p>
                </div>
                <div>
                    <button className="btn-lg  bg-white btn-circle  ">
                        <img className='w-16 text-center mx-auto' src={cpho} alt="" />
                    </button><br></br>
                    <CountUp className='text-xl font-semibold' delay={2} end={300} />+
                    <p className='mt-4'>Industry experts partnering <br></br> to build our content</p>
                </div>
                <div>
                    <button className="btn-lg  bg-white btn-circle  ">
                        <img className='w-16 text-center mx-auto' src={cpho6} alt="" />
                    </button><br></br>
                    <CountUp className='text-xl font-semibold' delay={2} end={100} />+
                    <p className='mt-4'>Udacity graduations and <br></br> counting</p>
                </div>
            </div>

        </div>
    );
};

export default Counter;