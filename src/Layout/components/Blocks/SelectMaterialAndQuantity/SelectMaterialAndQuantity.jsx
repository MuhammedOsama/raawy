import React from "react";
import {NavLink} from "react-router-dom";

// block
import FastingBreakfast from "../FastingBreakfast/FastingBreakfast";

// style
import "./SelectMaterialAndQuantity.scss";

// fontawesome
import fontawesome from "@fortawesome/fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faChevronRight);

export default function SelectMaterialAndQuantity() {
    return <div id="select-material-and-quantity">
        <div className="container">
            <div className="material">
                <NavLink className="material-name" to=""><FontAwesomeIcon icon="fa-solid fa-chevron-right" className="material-icon"/>تحديد الموارد و الكميات</NavLink>
                <h3 className="material-title">تفاصيل الطلب</h3>
            </div>
            <div className="row">
                <div className="col-lg-8 col-12">
                    <FastingBreakfast/>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="card">
                        <h3 className="card-title">مخلص الطلب</h3>
                        <div className="card-value">
                            <div className="discount">
                                <input className="discount-coupon" type="text" placeholder="كوبون الخصم..."/>
                                <button className="btn-add-discount">إضافة</button>
                            </div>
                            <div className="values">
                                <div className="process-value">
                                    <span className="process-value-title">قيمة الطلبات</span>
                                    <span className="process-value-price">50 ريال</span>
                                </div>
                                <div className="process-value">
                                    <span className="process-value-title">القيمة المضافة</span>
                                    <span className="process-value-price">50 ريال</span>
                                </div>
                                <div className="process-value">
                                    <span className="process-value-title">تكلفة الشحن</span>
                                    <span className="process-value-price">50 ريال</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-total">
                            <span className="card-total-title">الإجمالي</span>
                            <span className="card-total-price">79 ريال</span>
                            <NavLink to="/recipient-data" className="total-btn">
                                <button className="card-total-btn">تأكيد الطلب</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
