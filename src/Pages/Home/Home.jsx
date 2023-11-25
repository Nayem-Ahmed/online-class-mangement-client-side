import React from 'react';
import Banner from './Banner';
import Partner from './Partner';
import Teachers from './Teachers';
import TeachersRegistration from './TeachersRegistration';
import Counter from './Counter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partner></Partner>
            <Teachers></Teachers>
            <TeachersRegistration></TeachersRegistration>
            <Counter></Counter>
        </div>
    );
};

export default Home;