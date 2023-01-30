import React from "react";

// style
import "./CardOrderDetails.scss";

export default function CardOrderDetails() {
    return <div id="card-order-details">
        <div className="card">
            <h3 className="card-title">بيانات الطلب</h3>
            <ul className="card-content-list">
                <li className="list-item">
                    <h6 className="list-item-type">رقم الطلب:</h6>
                    <span className="list-item-value">2113#</span>
                </li>
                <li className="list-item">
                    <h6 className="list-item-type">تاريخ الطلب:</h6>
                    <span className="list-item-value">20-10-2022</span>
                </li>
                <li className="list-item">
                    <h6 className="list-item-type">إسم الجهة:</h6>
                    <span className="list-item-value">مسجد الإيمان</span>
                </li>
                <li className="list-item">
                    <h6 className="list-item-type">عنوان الجهة:</h6>
                    <span className="list-item-value">المدينة المنورة</span>
                </li>
                <li className="list-item">
                    <h6 className="list-item-type">نوع الطلب:</h6>
                    <span className="list-item-value">تبرع محدد</span>
                </li>
                <li className="list-item">
                    <h6 className="list-item-type">الكمية:</h6>
                    <span className="list-item-value">5</span>
                </li>
            </ul>
        </div>
    </div>
}
