import React from 'react';
import Discover from '../discover/Discover';

import './HomeStyles.scss';

const HomeComponent = () => {
    return (
        <div className='home-combine'>
        <div className='home-component'>
            <div className='navbar'>
                <div className='navbar-logo'>
                    <a href='/'>room</a>
                </div>
                <div className='navbar-comment'>
                    <a href='/'>Home</a>
                </div>
                <div className='navbar-comment'>
                    <a href='/'>Shop</a>
                </div>
                <div className='navbar-comment'>
                    <a href='/'>About</a>
                </div>
                <div className='navbar-comment'>
                    <a href='/'>Contact</a>
                </div>
            </div>
        </div>
            <div className='home-discover'>
                <Discover />
            </div>
        </div>
    )
}

export default HomeComponent;
