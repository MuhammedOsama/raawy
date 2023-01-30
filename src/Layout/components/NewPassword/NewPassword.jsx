import React from "react";
import {NavLink} from "react-router-dom";

// style
import "./NewPassword.scss";

export default function NewPassword() {
    return <div id="new-password">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="logo">
                        <img src={"./images/NewPassword.png"} alt="New Password"/>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="content">
                        <h5 className="content-title">إنشاء كلمة مرور جديدة</h5>
                        <div className="content-form">
                            <form>
                                <div className="input-form-content">
                                    <span className="input-name">كلمة المرور الجديدة</span>
                                    <input type="password" className="input-type"/>
                                </div>
                                <div className="input-form-content m-0">
                                    <span className="input-name">تأكيد كلمة المرور الجديدة</span>
                                    <input type="password" className="input-type"/>
                                </div>
                            </form>
                            <NavLink to="/signin">
                                <span className="btn-confirm">إرسال</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
