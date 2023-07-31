import React from "react";

import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__donateNow">
                <button>Give Water. Donate Now</button>
            </div>
            <div className="footer__row">
                <div className="footer__getToKnowUs">
                    <ul>
                        <li>get to know us</li>
                        <li>about us</li>
                        <li>our impact</li>
                    </ul>
                </div>
                <div className="footer__getInvolved">
                    <ul>
                        <li>get involved</li>
                        <li>fundraise</li>
                    </ul>
                </div>
            </div>
            <div className="footer__connect">
                <div className="footer__socialMediaIcons">
                    <ul>
                        <li>facebook</li>
                        <li>Twitter</li>
                        <li>instagram</li>
                        <li>snapChat</li>
                        <li>Youtube</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
            <div className="footer__privacyPolicy">
                <ul>
                    <li>privacy policy</li>
                </ul>
            </div>
            <div className="footer__copyrightNotice">
                <span>copyright notice</span>
            </div>
        </div>
    )

}

export default Footer;