import React from "react";
import {NavLink} from "react-router-dom";

// style
import "./AddFasting.scss";

export default function AddFasting() {
    return <div id="add-fasting">
        <div className="btn-add">
            <NavLink to="/add-fasting-breakfast" className="add">إضافة</NavLink>
        </div>
    </div>
}
