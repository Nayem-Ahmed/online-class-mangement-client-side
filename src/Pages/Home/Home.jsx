import React from 'react';
import Banner from './Banner';
import Partner from './Partner';
import Teachers from './Teachers';
import TeachersRegistration from './TeachersRegistration';
import Counter from './Counter';
import About from './About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partner></Partner>
            <TeachersRegistration></TeachersRegistration>
            <Teachers></Teachers>
            <About></About>
            <Counter></Counter>
        </div>
    );
};

export default Home;