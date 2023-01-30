import React from "react";

// style
import "./SummaryRequest.scss";

export default function SummaryRequest() {
    return <div id="summary-request">
        <div className="card">
            <h3 className="card-title">ملخص الطلب</h3>
            <ul className="card-content-list">
                <li className="list-item">
                    <h6 className="list-item-type">قيمة الطلب</h6>
                    <span className="list-item-value">50 ريال</span>
                </li>
                <li className="list-item">
                    <h6 className="list-item-type">القيمة المضافة</h6>
                    <span className="list-item-value">50 ريال</span>
                </li>
                <li className="list-item">
                    <h6 className="list-item-type">تكلفة الشحن</h6>
                    <span className="list-item-value">50 ريال</span>
                </li>
            </ul>
            <div className="total">
                <h6 className="total-type">الإجمالي</h6>
                <span className="total-value">150 ريال</span>
            </div>
        </div>
        <div className="cancel-btn">
            <button>إلغاء الطلب</button>
        </div>
    </div>
}
