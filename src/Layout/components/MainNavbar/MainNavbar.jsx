import React from "react";
import {Navbar, Dropdown} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

// style
import "./MainNavbar.scss";

// fontawesome
import fontawesome from "@fortawesome/fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faChevronDown} from "@fortawesome/fontawesome-free-solid";
import LogoutModal from "../../Blocks/LogoutModal/LogoutModal";

fontawesome.library.add(faBell, faChevronDown);

export default function MainNavbar(props) {
    return <div id="navbar">
        <Navbar expand="lg">
            <div className="container">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="nav">
                        <Dropdown className="notification-dropdown">
                            <Dropdown.Toggle>
                                <FontAwesomeIcon icon="fa-solid fa-bell notification-icon"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <span className="notification-date">اليوم</span>
                                <Dropdown.Item href="/" className="msg-content active">
                                    <p className="msg-desc">تم استلام تبرعك من قبل الإدارة وتم تحويلة إلى تبرع نشط</p>
                                    <span className="msg-time">الساعة 5:12</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="/" className="msg-content">
                                    <p className="msg-desc">تم استلام تبرعك من قبل الإدارة وتم تحويلة إلى تبرع نشط</p>
                                    <span className="msg-time">الساعة 5:12</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="/" className="msg-content">
                                    <p className="msg-desc">تم استلام تبرعك من قبل الإدارة وتم تحويلة إلى تبرع نشط</p>
                                    <span className="msg-time">الساعة 5:12</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="/" className="msg-content">
                                    <p className="msg-desc">تم استلام تبرعك من قبل الإدارة وتم تحويلة إلى تبرع نشط</p>
                                    <span className="msg-time">الساعة 5:12</span>
                                </Dropdown.Item>
                                <Link to="/notifications" className="view-all">عرض الكل</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="lang-dropdown">
                            <Dropdown.Toggle className="toggle">
                                <img className="saudi-logo" src={"./images/Saudi.png"} alt="Saudi"/>
                                <span className="drop-title">العربية</span>
                                <FontAwesomeIcon icon="fa-solid fa-chevron-down ar-icon"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/">
                                    <input className="input-type" type="radio" id="ar"/>
                                    <label className="label-name" htmlFor="ar">العربية</label>
                                </Dropdown.Item>
                                <Dropdown.Item href="/">
                                    <input className="input-type" type="radio" id="en"/>
                                    <label className="label-name" htmlFor="en">English</label>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <NavLink className="item-name" to="/">الرئيسية</NavLink>
                        <NavLink className="item-name" to="/offers">العروض</NavLink>
                        <NavLink className="item-name" to="/contact-us">تواصل معنا</NavLink>
                        {props.loginUser ? <Dropdown className="profile-dropdown">
                            <Dropdown.Toggle className="toggle">
                                <img className="profile-pic" src={"./images/ProfilePic.png"} alt="Saudi"/>
                                <FontAwesomeIcon icon="fa-solid fa-chevron-down ar-icon"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/personal-profile">
                                    <NavLink to="/personal-profile" className="profile-details">الحساب الشخصي</NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item href="/donates-locations">
                                    <NavLink to="/donates-locations" className="profile-details">عناوين تبرعاتي</NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item href="/order-info">
                                    <NavLink to="/order-info" className="profile-details">طلباتي</NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <LogoutModal/>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> : <NavLink className="item-name" to="/signin">تسجيل الدخول</NavLink>}
                    </div>
                </Navbar.Collapse>
            </div>
        </Navbar>
        <NavLink to="/"><img className="logo" src={"./images/RaawyLogo.svg"} alt="Raawy Logo"/></NavLink>
    </div>
}
