import React from 'react';
import DonationForm from '../donationForm/DonationForm';

import './Hero.scss';

const Hero = () =>{
    return (
        <div className='hero'>
            <div className='hero__content'>
                <h1>
                    <span className='hero__callToAction'>Give Water.</span>
                    <span className='hero__callToAction'>Give Life.</span>
                </h1>
                <div className='hero__donationForm'>
                     <DonationForm/>
                </div>
            </div>
        </div>
    )
}

export default Hero;
