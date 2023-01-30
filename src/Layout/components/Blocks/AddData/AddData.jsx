import React from "react";
import {NavLink} from "react-router-dom";

// style
import "./AddData.scss";

// fontawesome
import fontawesome from "@fortawesome/fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faChevronRight);

export default function AddData() {
    return <div id="add-data">
        <div className="container">
            <div className="data-header">
                <NavLink className="data-header-name" to="/select-material-and-quantity">
                    <FontAwesomeIcon icon="fa-solid fa-chevron-right" className="material-icon"/>
                    بيانات المستلم
                </NavLink>
                <h3 className="data-header-title">إضافة بيانات المستلم</h3>
            </div>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="card">
                        <form>
                            <div className="input-form-content">
                                <span className="input-name">الإسم</span>
                                <input className="input-type" type="text"/>
                            </div>
                            <div className="input-form-content">
                                <span className="input-name">رقم الجوال</span>
                                <input className="input-type" type="text"/>
                            </div>
                            <div className="input-form-content">
                                <span className="input-name">كلمة المرور</span>
                                <textarea className="text-type"/>
                            </div>
                        </form>
                        <div className="card-radio">
                            <span className="input-name">تحديد التبرع</span>
                            <div className="card-radio-option">
                                <div className="radio-option">
                                    <input className="radio-input" id="option-one" type="radio" value="طلب مرة واحدة"/>
                                    <label className="label" htmlFor="option-one">مصلى رجال</label>
                                </div>
                                <div className="radio-option">
                                    <input className="radio-input" id="option-one" type="radio" value="طلب مرة واحدة"/>
                                    <label htmlFor="option-one">مصلى نساء</label>
                                </div>
                            </div>
                        </div>
                        <div className="btn-done">
                            <NavLink to="/data-selection">
                                <button className="done">تم</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="logo">
                        <img src={"./images/Data.svg"} alt="Data Image"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
