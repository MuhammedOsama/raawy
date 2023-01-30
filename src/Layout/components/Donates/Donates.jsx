import React from "react";
import {NavLink} from "react-router-dom";

// style
import "./Donates.scss"

export default function Donates() {
    return <div id="donates">
        <div className="main-heading">
            <h2>التبرعات</h2>
        </div>
        <div className="row">
            <div className="col-lg-2 col-md-4 col-12">
                <NavLink to="/mosques" className="item-link">
                    <div className="card">
                        <img className="card-img" src={"./images/Donate1.png"} alt="Mosques Donate"/>
                        <h5 className="card-title">المساجد</h5>
                    </div>
                </NavLink>
            </div>
            <div className="col-lg-2 col-md-4 col-12">
                <NavLink to="/charities" className="item-link">
                    <div className="card">
                        <img className="card-img" src={"./images/Donate2.png"} alt="Charities Donate"/>
                        <h5 className="card-title">الجمعيات الخيرية</h5>
                    </div>
                </NavLink>
            </div>
            <div className="col-lg-2 col-md-4 col-12">
                <NavLink to="/orphanage" className="item-link">
                    <div className="card">
                        <img className="card-img" src={"./images/Donate3.png"} alt="Orphanage Donate"/>
                        <h5 className="card-title">دار الأيتام</h5>
                    </div>
                </NavLink>
            </div>
            <div className="col-lg-2 col-md-4 col-12">
                <NavLink to="/multi-fasting" className="item-link">
                    <div className="card">
                        <img className="card-img" src={"./images/Donate4.png"} alt="Fasting Breakfast Donate"/>
                        <h5 className="card-title">إفطار صائم</h5>
                    </div>
                </NavLink>
            </div>
            <div className="col-lg-2 col-md-4 col-12">
                <NavLink to="/" className="item-link">
                    <div className="card">
                        <img className="card-img" src={"./images/Donate5.png"} alt="Mosques Donate"/>
                        <h5 className="card-title">هدية الحجاج</h5>
                    </div>
                </NavLink>
            </div>
            <div className="col-lg-2 col-md-4 col-12">
                <NavLink to="/" className="item-link">
                    <div className="card">
                        <img className="card-img" src={"./images/Donate6.png"} alt="Mosques Needs Donate"/>
                        <h5 className="card-title">المساجد الأكثر احتياجاً</h5>
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
}
