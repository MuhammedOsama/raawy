import React from "react";

// style
import "./FinalRequest.scss";
import {NavLink} from "react-router-dom";

export default function FinalRequest() {
    return <div id="final-request">
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
                <NavLink to="/data-pay" className="total-btn">
                    <button className="card-total-btn">تأكيد الطلب</button>
                </NavLink>
            </div>
        </div>
    </div>
}
