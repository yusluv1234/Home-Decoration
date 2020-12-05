import React from 'react';
import HomeComponent from '../home/HomeComponent';
// import Discover from '../discover/Discover';

import './HomePage.scss';

const HomePage = () => {
    return (
        <div className='homepage'>
            <HomeComponent />
            {/* <Discover /> */}
        </div>
    )
}

export default HomePage;
