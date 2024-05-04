import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';

import partnar1 from '../../assets/1.png';
import partnar2 from '../../assets/2.png';
import partnar3 from '../../assets/3.png';
import partnar4 from '../../assets/4.png';
import partnar5 from '../../assets/5.png';
import partnar6 from '../../assets/6.png';
import partnar7 from '../../assets/7.png';
import partnar8 from '../../assets/8.png';

const Partner = () => {
    return (
        <Swiper
            className='flex justify-center mx-auto text-center p-5 my-7'
            modules={[Navigation]}
            navigation={true}
            autoplay={{ delay: 3000 }} // Adjust autoplay delay here (in milliseconds)
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
                // Responsive breakpoints
                300: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }}
        >
            <SwiperSlide className='p-5' style={{ width: '300px', height: '400px' }}> {/* Set fixed width and height */}
                <div className='shadow-lg p-4 h-full'>
                    <img className='mx-auto h-32 mb-8' src={partnar1} alt="" /> {/* Adjust height of the image */}
                    <p className='text-md '>A leading provider in education technology, specializing in interactive learning solutions for schools and universities.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className='p-5' style={{ width: '300px', height: '400px' }}>
                <div className='shadow-lg p-4 h-full'>
                    <img className='mx-auto h-32 mb-8' src={partnar2} alt="" />
                    <p className='text-md'>An innovative e-learning platform focused on personalized learning experiences, offering a wide range of courses and resources.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className='p-5' style={{ width: '300px', height: '400px' }}>
                <div className='shadow-lg p-4 h-full'>
                    <img className='mx-auto h-32 mb-8' src={partnar3} alt="" />
                    <p className='text-md'>A global leader in educational content creation, producing engaging materials for students and educators worldwide.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className='p-5' style={{ width: '300px', height: '400px' }}>
                <div className='shadow-lg p-4 h-full mb-8'>
                    <img className='mx-auto h-32 mb-8' src={partnar4} alt="" />
                    <p className='text-md'>A prominent research institution collaborating with us to advance education through cutting-edge studies and initiatives.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className='p-5' style={{ width: '300px', height: '400px' }}>
                <div className='shadow-lg p-4 h-full'>
                    <img className='mx-auto h-32 mb-8' src={partnar5} alt="" />
                    <p className='text-md'>A non-profit organization dedicated to improving access to quality education in underserved communities, partnering with us to make a difference.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className='p-5' style={{ width: '300px', height: '400px' }}>
                <div className='shadow-lg p-4 h-full'>
                    <img className='mx-auto h-32 mb-8' src={partnar6} alt="" />
                    <p className='text-md'>An edTech startup revolutionizing online learning experiences, contributing to our shared vision of accessible and effective education.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className='p-5' style={{ width: '300px', height: '400px' }}>
                <div className='shadow-lg p-4 h-full'>
                    <img className='mx-auto h-32 mb-8' src={partnar7} alt="" />
                    <p className='text-md'>A renowned publishing company providing educational materials and resources, enhancing our commitment to quality learning materials.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className='p-5' style={{ width: '300px', height: '400px' }}>
                <div className='shadow-lg p-4 h-full'>
                    <img className='mx-auto h-32 mb-8' src={partnar8} alt="" />
                    <p className='text-md'>An education consultancy firm specializing in curriculum development and teacher training, collaborating with us to enhance educational practices.</p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Partner;
