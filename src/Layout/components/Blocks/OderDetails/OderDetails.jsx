import React from "react";
import {NavLink} from "react-router-dom";

// block
import Slider from "../../../Blocks/Slider/Slider";
import CardOrderDetails from "../CardOrderDetails/CardOrderDetails";
import SummaryRequest from "../SummaryRequest/SummaryRequest";

// style
import "./OderDetails.scss";

// fontawesome
import fontawesome from "@fortawesome/fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faChevronRight);

export default function OderDetails() {
    return <div id="order-details">
        <div className="container">
            <div className="main-heading">
                <h3 className="title-heading">طلباتي</h3>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <Slider/>
                </div>
                <div className="col-lg-9 col-12">
                    <div className="order">
                        <NavLink className="order-name" to="/order-info"><FontAwesomeIcon icon="fa-solid fa-chevron-right" className="order-icon"/>الطلبات</NavLink>
                    </div>
                    <div className="content">
                        <h3 className="content-title">تفاصيل الطلب</h3>
                        <CardOrderDetails/>
                        <SummaryRequest/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
