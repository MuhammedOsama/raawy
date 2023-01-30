import React from "react";
import {NavLink} from "react-router-dom";

// style
import "./TabsContent.scss";

// fontawesome
import fontawesome from "@fortawesome/fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTag, faMapPin, faLocationArrow, faCalendar, faMoneyBillWave} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faTag, faMapPin, faLocationArrow, faCalendar, faMoneyBillWave);


export default function TabsContent() {
    return <div id="tabs-content">
        <NavLink className="order-tabs-content" to="/order-details">
            <div className="card">
                <h3 className="card-number">213#</h3>
                <div className="card-content">
                    <ul className="card-content-list">
                        <li className="list-item">
                            <FontAwesomeIcon icon="fa-solid fa-tag" className="list-icon-item"/>
                            <h6 className="list-item-type">نوع الطلب:</h6>
                            <span className="list-item-value">مساجد</span>
                        </li>
                        <li className="list-item">
                            <FontAwesomeIcon icon="fa-solid fa-map-pin" className="list-icon-item"/>
                            <h6 className="list-item-type">إسم الجهة:</h6>
                            <span className="list-item-value">التقوى</span>
                        </li>
                        <li className="list-item">
                            <FontAwesomeIcon icon="fa-solid fa-location-arrow" className="list-icon-item"/>
                            <h6 className="list-item-type">عنوان الجهة:</h6>
                            <span className="list-item-value">المدينة المنورة شارع العوالي</span>
                        </li>
                        <li className="list-item">
                            <FontAwesomeIcon icon="fa-solid fa-calendar" className="list-icon-item"/>
                            <h6 className="list-item-type">تاريخ الطلب:</h6>
                            <span className="list-item-value">20-10-2022</span>
                        </li>
                        <li className="list-item">
                            <FontAwesomeIcon icon="fa-solid fa-money-bill-wave" className="list-icon-item"/>
                            <h6 className="list-item-type">إجمالي الطلب:</h6>
                            <span className="list-item-value">200 <span className="currency">ريال</span></span>
                        </li>
                    </ul>
                </div>
            </div>
        </NavLink>
    </div>
}
