import React from "react";
import {NavLink} from "react-router-dom";

// block
import DataPayBody from "../DataPayBody/DataPayBody";
import DataPayHeader from "../DataPayHeader/DataPayHeader";

// style
import "./DataPay.scss";

export default function DataPay() {
    return <div id="data-pay">
        <DataPayHeader/>
        <DataPayBody/>
    </div>
}
