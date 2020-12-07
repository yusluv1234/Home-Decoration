import React from 'react';
import Arrow from '../icons/icon-arrow.svg';
import Carrowsell from '../carrowsell/Carrowsell';

import './Discover.scss';

const Discover = () => {
    return (
        <div className='discover'>
            <div className='discover-header'>
                <div className='discover-title'>
                Discover innovative ways to decorate
                </div>
                <p>We provide unmatched quality, comfort and style for property
                    owners accros the country. Our experts combine form and function in bringing
                    your vision to life. Create a room in your own style with your collection
                    and make your property a reflection of you and what you love.
                </p>
                <h4>SHOP NOW <img className='arrow' src={Arrow} alt='arrow' /></h4>
            </div>
            <div className='discover-carrowsel'>
                <Carrowsell />
            </div>
        </div>
    )
}

export default Discover;
