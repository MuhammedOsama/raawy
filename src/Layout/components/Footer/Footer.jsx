import React from "react";
import {NavLink} from "react-router-dom";

// style
import "./Footer.scss";

// fontawesome
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/fontawesome-free-solid";
import {faFacebookF, faInstagram, faSnapchat, faYoutube} from '@fortawesome/free-brands-svg-icons'

fontawesome.library.add(faPhone, faFacebookF, faInstagram, faSnapchat, faYoutube);

export default function Footer() {
    return <div id="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="logo">
                        <img src={"./images/RaawyWhiteLogo.png"} alt="Raawy White Logo"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="content">
                        <h3 className="content-title">صفحات تهمك</h3>
                        <ul className="content-list">
                            <NavLink to="/order-info" className="order-link">
                                <li className="content-list-item">طلباتي</li>
                            </NavLink>
                            <NavLink to="/" className="order-link">
                                <li className="content-list-item">المدونة</li>
                            </NavLink>
                            <NavLink to="/mosques" className="order-link">
                                <li className="content-list-item">المساجد</li>
                            </NavLink>
                            <NavLink to="/orphanage" className="order-link">
                                <li className="content-list-item">دور الأيتام</li>
                            </NavLink>
                            <NavLink to="/charities" className="order-link">
                                <li className="content-list-item">الجمعيات الخيرية</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="content">
                        <h3 className="content-title">تواصل معنا</h3>
                        <ul className="content-list">
                            <li className="content-list-item">
                                <FontAwesomeIcon icon="fa-solid fa-phone" className="phone-icon"/>
                                <span>018181919911</span>
                            </li>
                            <li className="content-list-item">
                                <FontAwesomeIcon icon="fa-solid fa-phone" className="phone-icon"/>
                                <span>018181919911</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="content">
                        <h3 className="content-title">روابط التواصل</h3>
                    </div>
                    <div className="content-icons">
                        <a href="/" className="social-icon facebook"><FontAwesomeIcon icon="fa-brands fa-facebook-f"/></a>
                        <a href="/" className="social-icon instagram"><FontAwesomeIcon icon="fa-brands fa-instagram"/></a>
                        <a href="/" className="social-icon snapchat"><FontAwesomeIcon icon="fa-brands fa-snapchat"/></a>
                        <a href="/" className="social-icon youtube"><FontAwesomeIcon icon="fa-brands fa-youtube"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
