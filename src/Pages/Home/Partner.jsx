import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';



import partnar1 from '../../assets/1.png'
import partnar2 from '../../assets/2.png'
import partnar3 from '../../assets/3.png'
import partnar4 from '../../assets/4.png'
import partnar5 from '../../assets/5.png'
import partnar6 from '../../assets/6.png'
import partnar7 from '../../assets/7.png'
import partnar8 from '../../assets/8.png'



const Partner = () => {
    return (
        <Swiper className='flex justify-center mx-auto text-center p-4 my-7'
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={true}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img className='mx-auto' src={partnar1} alt="" />
                <p className='text-sm '>A leading provider in education technology, specializing in interactive learning solutions for schools and universities.</p>
            </SwiperSlide>
            <SwiperSlide>
                <img className='mx-auto' src={partnar2} alt="" />
                <p className='text-sm'>An innovative e-learning platform focused on personalized learning experiences, offering a wide range of courses and resources.</p>
            </SwiperSlide>
            <SwiperSlide>
                <img className='mx-auto' src={partnar3} alt="" />
                <p className='text-sm'>A global leader in educational content creation, producing engaging materials for students and educators worldwide.</p>
            </SwiperSlide>
            <SwiperSlide>
                <img className='mx-auto' src={partnar4} alt="" />
                <p className='text-sm'>A prominent research institution collaborating with us to advance education through cutting-edge studies and initiatives.</p>
            </SwiperSlide>
            <SwiperSlide>
                <img className='mx-auto' src={partnar5} alt="" />
                <p className='text-sm'> A non-profit organization dedicated to improving access to quality education in underserved communities, partnering with us to make a difference.</p>
            </SwiperSlide>
            <SwiperSlide>
                <img className='mx-auto' src={partnar6} alt="" />
                <p className='text-sm'>An edTech startup revolutionizing online learning experiences, contributing to our shared vision of accessible and effective education.</p>
            </SwiperSlide>
            <SwiperSlide>
                <img className='mx-auto' src={partnar7} alt="" />
                <p className='text-sm'>A renowned publishing company providing educational materials and resources, enhancing our commitment to quality learning materials.</p>
            </SwiperSlide>
            <SwiperSlide>
                <img className='mx-auto' src={partnar8} alt="" />
                <p className='text-sm'>An education consultancy firm specializing in curriculum development and teacher training, collaborating with us to enhance educational practices.</p>
            </SwiperSlide>
        </Swiper>
    );
};

export default Partner;