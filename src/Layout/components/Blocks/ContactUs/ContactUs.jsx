import React from "react";

// style
import "./ContactUs.scss";

// fontawesome
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/fontawesome-free-solid";
import {faFacebookF, faInstagram, faSnapchat, faYoutube} from '@fortawesome/free-brands-svg-icons'

fontawesome.library.add(faPhone, faFacebookF, faInstagram, faSnapchat, faYoutube);

export default function ContactUs() {
    return <div id="contact-us">
        <div className="contact-content">
            <div className="logo">
                <img src={"./images/ContactUs.svg"} alt="Contact Us"/>
            </div>
            <div className="content">
                <div className="content-details">
                    <h3 className="content-title">تواصل معنا</h3>
                    <span className="content-desc">يسعدنا الإجابة على جميع إستفساراتكم</span>
                </div>
                <div className="content-icons">
                    <a href="/" className="social-icon facebook"><FontAwesomeIcon icon="fa-brands fa-facebook-f"/></a>
                    <a href="/" className="social-icon instagram"><FontAwesomeIcon icon="fa-brands fa-instagram"/></a>
                    <a href="/" className="social-icon snapchat"><FontAwesomeIcon icon="fa-brands fa-snapchat"/></a>
                    <a href="/" className="social-icon youtube"><FontAwesomeIcon icon="fa-brands fa-youtube"/></a>
                </div>
                <span className="contact-number"><FontAwesomeIcon icon="fa-solid fa-phone" className="phone-icon"/>96682728291</span>
            </div>
        </div>
    </div>
}
