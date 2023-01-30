import React from "react";
import {NavLink} from "react-router-dom";

// block
import LogoutModal from "../LogoutModal/LogoutModal";

// style
import "./Slider.scss";

// fontawesome
import fontawesome from "@fortawesome/fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faFile, faLocationArrow, faExclamationCircle, faArrowCircleRight} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faUser, faFile, faLocationArrow, faExclamationCircle, faArrowCircleRight);

export default function Slider() {
    return <div id="slider">
        <div className="content">
            <NavLink className="content-item" to="/personal-profile"><FontAwesomeIcon icon="fa-solid fa-user" className="content-icon"/>الحساب الشخصي</NavLink>
            <NavLink className="content-item" to="/order-info"><FontAwesomeIcon icon="fa-solid fa-file" className="content-icon"/>طلباتي</NavLink>
            <NavLink className="content-item" to="/donates-locations"><FontAwesomeIcon icon="fa-solid fa-location-arrow" className="content-icon"/>عناوين تبرعاتي</NavLink>
            <NavLink className="content-item" to="/conditions"><FontAwesomeIcon icon="fa-solid fa-exclamation-circle" className="content-icon"/>الشروط و الأحكام</NavLink>
            <div>
                <FontAwesomeIcon icon="fa-solid fa-arrow-circle-right" className="content-icon logout-icon"/>
                <LogoutModal/>
            </div>
        </div>
    </div>
}
