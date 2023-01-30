import React from "react";

// style
import "./WhoAreWe.scss";

export default function WhoAreWe() {
    return <div id="who-are-we">
        <div className="main-heading">
            <h2>من نحن</h2>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="content">
                        <img className="content-logo" src={"./images/RaawyLogo.svg"} alt="Raawy Logo"/>
                        <p className="content-desc">يمكنك ادراج في تلك المساحة ملخص سريع عن هدف المبادرة او ما تقدمه . على ان يكون النص صغير و جذاب و معبر عن هدف المبادرة . ولا يزيد عن 3 اسطر يمكنك ادراج في تلك المساحة ملخص سريع عن هدف المبادرة او ما تقدمه . على ان يكون النص صغير و جذاب و معبر عن هدف المبادرة . ولا يزيد عن 3 اسطر يمكنك ادراج في تلك المساحة ملخص سريع عن هدف المبادرة او ما تقدمه . على ان يكون النص صغير و جذاب و معبر عن هدف المبادرة ولا يزيد عن 3 اسطر</p>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="logo">
                        <img src={"./images/WhoAreWe.png"} alt="Who Are We"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
