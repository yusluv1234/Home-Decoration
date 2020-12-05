import React from 'react';

import './HomeStyles.scss';

const HomeComponent = () => {
    return (
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
    )
}

export default HomeComponent;
