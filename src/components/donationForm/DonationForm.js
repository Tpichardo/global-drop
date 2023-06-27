import React from 'react';

import BoltIcon from '@mui/icons-material/Bolt';

import './DonationForm.scss'

const DonationForm = () => {
    return (
        <div className='donationForm'>
            <div className='donationForm__toggleButtons'>
                <div className='donationForm__giveOnceToggle donationForm__giveOnceToggle--active'>Give Once</div>
                <div className='donationForm__giveMonthlyToggle'>Monthly</div>
            </div>
            <div className="donationForm__title">
                Choose an ammount to give
            </div>
            <div className="donationForm__form">
                <div className="donationForm__amount donationForm__amount--selected">$40 <span>USD</span></div>
                <div className="donationForm__amount">$100 <span>USD</span></div>
                <div className="donationForm__amount">$240 <span>USD</span></div>
                <div className="donationForm__amount">$500 <span>USD</span></div>
                <div className="donationForm__amount">Other amount</div>
                <button className="donationForm__submit">Give</button>
            </div>
            <div className="donationForm__promotion">
                <div className="donationForm__icon">
                    <BoltIcon sx={{ fontSize: 40 }} />
                </div>
                <div>
                    <div className='donationForm__promoTitle'>
                        This is a matchmaking campaign!
                    </div>
                    <div className="donationForm__text">
                        Every one-time gift will be matched by our longtime friends and supporters PCPartPicker.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonationForm;