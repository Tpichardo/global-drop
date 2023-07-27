import React from 'react';

import OurWorkSvgs from '../ourWork/OurWorkSvgs';

import whyWaterIntro from '../../assets/whyWaterIntro.jpg'

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
            <div className=''>
                <img src={whyWaterIntro} alt="two girls getting water from dirty pond" />
                <h4>Clean water is a whole family concern.</h4>
                <p>Finding water is a daily challenge for young girls, moms and sons. With a charitable donation today, you can lift this burden.</p>
                <p>Providing a reliable and safe water source will unlock potential by returning time for study, work, and imagination.</p>
            </div>
            <div>
                <h4>Stay updated with stories from our team</h4>
                <img></img>
                {/* story title */}
                {/* story catcher */}
                {/* carousel? */}
            </div>


        </div>
    )
}

export default Home;