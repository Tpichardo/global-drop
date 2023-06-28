import React from 'react';

import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__ourWorkIntro'>
                <span className='home__title'>Our Work</span>
                <h2 className='home__callToActionHeader'>771 million people lack basic access to clean and safe drinking water. Join us in our mission to change that.</h2>
                <p className='home__sustainableInitiativesIntro'>We strongly believe in the power of locally-led sustainable initiatives. Through collaborative efforts with our local partners, we not only establish community-owned water projects but also foster comprehensive water, sanitation, and hygiene programs. This holistic approach ensures the  protection of everyone’s long-term health.</p>
            </div>
            <div className='home__ourWorkIcons'>
                <div className='home__numOfFundedProjects'>
                    <img src="" alt=""/>
                </div>
                <div className='home__numOfPeopleServed'>
                    <img src="" alt=""/>
                </div>
                <div className='home__numOfCountriesServed'>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Home;