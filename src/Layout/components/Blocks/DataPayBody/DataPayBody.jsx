import React from "react";

// style
import "./DataPayBody.scss";

export default function DataPayBody() {
    return <div id="data-pay-body">
        <div className="card">
            <div className="schedule-request-card">
                <div className="pay-way">
                    <h3 className="schedule-title">طرق الدفع</h3>
                    <div className="radio-form">
                        <div className="radio-option">
                            <input className="radio-input" id="option-one" type="radio" value="طلب مرة واحدة"/>
                            <label htmlFor="option-one">
                                <img className="pay-way-image" src={"./images/MasterCard.svg"} alt="Master Card"/>
                            </label>
                        </div>
                        <div className="radio-option">
                            <input className="radio-input" id="option-two" type="radio" value="إسبوعي"/>
                            <label htmlFor="option-two">
                                <img className="pay-way-image" src={"./images/Pay.svg"} alt="Pay"/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="schedule-request">
                    <h3 className="schedule-title">جدولة الطلب</h3>
                    <div className="radio-form">
                        <div className="radio-option">
                            <input className="radio-input" id="option-one" type="radio" value="طلب مرة واحدة"/>
                            <label htmlFor="option-one">طلب مرة واحدة</label>
                        </div>
                        <div className="radio-option">
                            <input className="radio-input" id="option-two" type="radio" value="إسبوعي"/>
                            <label htmlFor="option-two">إسبوعي</label>
                        </div>
                        <div className="radio-option">
                            <input className="radio-input" id="option-three" type="radio" value="شهري"/>
                            <label htmlFor="option-three">شهري</label>
                        </div>
                    </div>
                </div>
                <div className="schedule-value">
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
                    <div className="schedule-total">
                        <span className="schedule-total-title">الإجمالي</span>
                        <span className="schedule-total-price">79 ريال</span>
                    </div>
                </div>
                <button className="schedule-total-btn">تأكيد الطلب</button>
            </div>
        </div>
    </div>
}
