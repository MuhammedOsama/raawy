import React from "react";
import {NavLink} from "react-router-dom";

// block
import DataPayBody from "../DataPayBody/DataPayBody";

// style
import "./DataSelection.scss";

// fontawesome
import fontawesome from "@fortawesome/fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faChevronRight);

export default function DataSelection() {
    return <div id="data-selection">
        <div className="data-header">
            <NavLink className="data-header-name" to="/add-data"><FontAwesomeIcon icon="fa-solid fa-chevron-right" className="data-header-icon"/>رجوع</NavLink>
            <h3 className="data-header-title">بيانات الدفع</h3>
        </div>
        <DataPayBody/>
    </div>
}
