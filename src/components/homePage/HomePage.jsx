import React from 'react';
import AboutComponent from '../about/About.Component';
import HomeComponent from '../home/HomeComponent';

import './HomePage.scss';

const HomePage = () => {
    return (
        <div className='homepage'>
            <HomeComponent />
            <AboutComponent />
        </div>
    )
}

export default HomePage;
