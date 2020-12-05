import React from 'react';
import LeftAngle from '../icons/icon-angle-left.svg';
import RightAngle from '../icons/icon-angle-right.svg';

import './Carrowsell.scss'

const Carrowsell = () => {
    return (
        <div className='carrowsell'>
            <div className='angles1'>
            <img src={LeftAngle} alt='angle' />
            </div>
            <div className='angles'>
            <img src={RightAngle} alt='angle' />
            </div>
        </div>
    )
}

export default Carrowsell;
