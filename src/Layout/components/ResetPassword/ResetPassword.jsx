import React from "react";

// style
import "./ResetPassword.scss";
import {NavLink} from "react-router-dom";

export default function ResetPassword() {
    return <div id="reset-password">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="logo">
                        <img src={"./images/Password.png"} alt="Reset Password"/>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="content">
                        <h3 className="content-title">إستعادة كلمة المرور</h3>
                        <div className="content-form">
                            <div className="input-form-content">
                                <span className="input-name">رقم الجوال</span>
                                <input className="input-type" type="text"/>
                            </div>
                            <NavLink to="/otp-code">
                                <span className="btn-send">إرسال</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
