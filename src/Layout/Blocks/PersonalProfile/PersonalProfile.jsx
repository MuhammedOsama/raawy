import React from "react";

// style
import "./PersonalProfile.scss";

// block
import Slider from "../Slider/Slider";

// fontawesome
import fontawesome from "@fortawesome/fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faCamera);

export default function PersonalProfile() {
    return <div id="personal-profile">
        <div className="container">
            <div className="main-heading">
                <h3 className="title-heading">الحساب الشخصي</h3>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <Slider/>
                </div>
                <div className="col-lg-9 col-12">
                    <div className="card">
                        <div className="content">
                            <div className="logo">
                                <img src={"./images/ProfilePic.png"} alt="Personal Profile"/>
                                <FontAwesomeIcon icon="fa-solid fa-camera" className="camera-icon"/>
                            </div>
                            <div className="content-form">
                                <form>
                                    <div className="input-form-content">
                                        <span className="input-name">الإسم</span>
                                        <input className="input-type" type="text"/>
                                    </div>
                                    <div className="input-form-content m-0">
                                        <span className="input-name">رقم الجوال</span>
                                        <input className="input-type" type="number"/>
                                    </div>
                                    <div className="form-confirm">
                                        <button className="btn-edit">تعديل البيانات</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
