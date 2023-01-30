import React from "react";
import {NavLink} from "react-router-dom";

// style
import "./RecipientData.scss";

// fontawesome
import fontawesome from "@fortawesome/fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft, faMapPin, faLocationArrow} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faChevronRight, faChevronLeft, faMapPin, faLocationArrow);

export default function RecipientData() {
    return <div id="recipient-data">
        <div className="container">
            <div className="data-header">
                <NavLink className="data-header-name" to="/select-material-and-quantity">
                    <FontAwesomeIcon icon="fa-solid fa-chevron-right" className="material-icon"/>
                    تفاصيل الطلب
                </NavLink>
                <h3 className="data-header-title">بيانات المستلم</h3>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <NavLink to="/add-data" className="card-link">
                            <div className="card-item">
                                <div className="card-item-details">
                                <span>
                                    <FontAwesomeIcon icon="fa-solid fa-map-pin" className="card-icon"/>
                                    مسجد الإيمان
                                </span>
                                    <span>
                                    <FontAwesomeIcon icon="fa-solid fa-location-arrow" className="card-icon"/>
                                    المدينة شارع العوالي
                                </span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-left"/>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/add-data" className="card-link">
                            <div className="card-item">
                                <div className="card-item-details">
                                <span>
                                    <FontAwesomeIcon icon="fa-solid fa-map-pin" className="card-icon"/>
                                    مسجد الإيمان
                                </span>
                                    <span>
                                    <FontAwesomeIcon icon="fa-solid fa-location-arrow" className="card-icon"/>
                                    المدينة شارع العوالي
                                </span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-left"/>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/add-data" className="card-link">
                            <div className="card-item">
                                <div className="card-item-details">
                                <span>
                                    <FontAwesomeIcon icon="fa-solid fa-map-pin" className="card-icon"/>
                                    مسجد الإيمان
                                </span>
                                    <span>
                                    <FontAwesomeIcon icon="fa-solid fa-location-arrow" className="card-icon"/>
                                    المدينة شارع العوالي
                                </span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-left"/>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/data-pay" className="btn-link">
                            <button className="btn-card">تأكيد</button>
                        </NavLink>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="logo">
                        <img src={"./images/RecipientData.svg"} alt="Recipient Data"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
