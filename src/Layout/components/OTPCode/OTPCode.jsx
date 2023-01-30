import React from "react";
import {NavLink} from "react-router-dom";

// style
import "./OTPCode.scss";

export default function OTPCode() {
    return <div id="otp-code">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="logo">
                        <img src={"./images/OTPCode.png"} alt="OTP Code"/>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="content">
                        <h3 className="content-title">كود التفعيل</h3>
                        <div className="content-desc">
                            <ul className="content-list">
                                <li className="list-item"><input className="input-type" type="text"/></li>
                                <li className="list-item"><input className="input-type" type="text"/></li>
                                <li className="list-item"><input className="input-type" type="text"/></li>
                                <li className="list-item"><input className="input-type" type="text"/></li>
                            </ul>
                            <span className="count">00:00</span>
                            <div className="list-confirm">
                                <NavLink to="/new-password">
                                    <button className="btn-send">إرسال</button>
                                </NavLink>
                                <a href="/otp-code" className="resend">إعادة إرسال</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
