import React from 'react';

import OurWorkSvgs from '../ourWork/OurWorkSvgs';

import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__ourWorkIntro'>
                <span className='home__title'>Our Work</span>
                <h2 className='home__callToActionHeader'>385 million people lack basic access to clean and safe drinking water in South Asia. Join us in our mission to change that one community at a time.</h2>
                <p className='home__sustainableInitiativesIntro'>We strongly believe in the power of locally-led sustainable initiatives. By working together with our local partners, we not only establish community-owned water projects but also foster comprehensive water, sanitation, and hygiene programs. This holistic approach ensures the  protection of everyone’s long-term health.</p>
            </div>

            <OurWorkSvgs />

        </div>
    )
}

export default Home;