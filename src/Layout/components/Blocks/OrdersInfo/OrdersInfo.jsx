import React from "react";

// blocks
import Slider from "../../../Blocks/Slider/Slider";
import TabsDetails from "../../../Blocks/TabsDetails/TabsDetails";

// style
import "./OrdersInfo.scss"

export default function OrdersInfo() {
    return <div id="needs">
        <div className="container">
            <div className="main-heading">
                <h3 className="title-heading">طلباتي</h3>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <Slider/>
                </div>
                <div className="col-lg-9 col-12">
                    <TabsDetails/>
                </div>
            </div>
        </div>
    </div>
}
