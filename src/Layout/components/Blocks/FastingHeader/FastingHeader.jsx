import React from "react";
import {NavLink} from "react-router-dom";

// style
import "./FastingHeader.scss";

// fontawesome
import fontawesome from "@fortawesome/fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faChevronRight);

export default function FastingHeader() {
    return <div id="fasting-header">
        <div className="fasting">
            <NavLink className="fasting-name" to="/"><FontAwesomeIcon icon="fa-solid fa-chevron-right" className="fasting-icon"/>الرئيسية</NavLink>
            <h3 className="fasting-title">إفطار صائم</h3>
        </div>
    </div>
}
