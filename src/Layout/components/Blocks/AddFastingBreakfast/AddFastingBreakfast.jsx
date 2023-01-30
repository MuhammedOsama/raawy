import React from "react";
import {NavLink} from "react-router-dom";

// block
import FastingBreakfast from "../FastingBreakfast/FastingBreakfast";

// style
import "./AddFastingBreakfast.scss";

// fontawesome
import fontawesome from "@fortawesome/fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/fontawesome-free-solid";
import FinalRequest from "../FinalRequest/FinalRequest";

fontawesome.library.add(faChevronRight);

export default function AddFastingBreakfast() {
    return <div id="add-fasting-breakfast">
        <div className="container">
            <div className="fasting">
                <NavLink className="fasting-name" to="/multi-fasting"><FontAwesomeIcon icon="fa-solid fa-chevron-right" className="fasting-icon"/>إفطار صائم</NavLink>
                <h3 className="fasting-title">تفاصيل الطلب</h3>
            </div>
            <div className="row">
                <div className="col-lg-8 col-12">
                    <FastingBreakfast/>
                </div>
                <div className="col-lg-4 col-12">
                    <FinalRequest/>
                </div>
            </div>
        </div>
    </div>
}
