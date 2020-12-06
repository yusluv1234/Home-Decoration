import React from 'react';
import AboutDark from '../icons/images/image-about-dark.jpg';
import AboutLight from '../icons/images/image-about-light.jpg';

import './About.Styles.scss';

const AboutComponent = () => {
    return (
        <div className='about'>
            <div className='first-image'>
            <img className='photo' src={AboutDark} alt=''  />
            </div>
            <div className='about-comment'>
                <div className='comment__header'>
                    ABOUT OUR FURNITURE 
                </div>
                    <p>Our multifunctional collection blengs design and function to suit your
                    indivikdual taste. Make each room unique, or pick a cohesive theme that
                    best express your interests and what inspires you. Find the furniture pieces
                    you need, from traditional to contemporary styles or anything in between. Product
                    specialist are available to help you create your dream space.
                </p>
            </div>
            <div className='second-image'>
            <img className='photo' src={AboutLight} alt='' />

            </div>
            
        </div>
    )
}

export default AboutComponent;
