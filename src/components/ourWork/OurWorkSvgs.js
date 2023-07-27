import React from "react";

import peopleServedImg from '../../assets/peopleServed.svg';
import fundedProjectsImg from '../../assets/fundedProjects.svg';
import countriesServedImg from '../../assets/countriesServed.svg';

import './OurWorkSvgs.scss'

const OurWorkSvgs = () => {
    return (
        <div className="ourWorkSvgs">
            <div className='ourWorkSvgs__container'>
                <div className='ourWorkSvgs__numOfPeopleServed'>
                    <img src={peopleServedImg} alt="" />
                    <h3>412</h3>
                    <p>People served</p>
                </div>
                <div className='ourWorkSvgs__numOfFundedProjects'>
                    <img src={fundedProjectsImg} alt="" />
                    <h3>10</h3>
                    <p>Water projects funded</p>
                </div>
                <div className='ourWorkSvgs__numOfCountriesServed'>
                    <img src={countriesServedImg} alt="" />
                    <h3>2</h3>
                    <p>Countries</p>
                </div>
            </div>
        </div>
    )
}

export default OurWorkSvgs;