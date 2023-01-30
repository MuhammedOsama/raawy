import React from "react";
import FastingHeader from "../FastingHeader/FastingHeader";
import FastingBreakfast from "../FastingBreakfast/FastingBreakfast";
import AddFasting from "../AddFasting/AddFasting";

export default function MultiFasting() {
    return <div id="multi-fasting">
        <div className="container">
            <FastingHeader/>
            <FastingBreakfast/>
            <AddFasting/>
        </div>
    </div>
}
