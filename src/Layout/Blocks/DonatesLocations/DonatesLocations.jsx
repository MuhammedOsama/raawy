import React from "react";

// block
import Slider from "../Slider/Slider";

// style
import "./DonatesLocations.scss";

// fontawesome
import fontawesome from "@fortawesome/fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationArrow} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faLocationArrow);

export default function DonatesLocations() {
    return <div id="donates-locations">
        <div className="container">
            <div className="main-heading">
                <h3 className="title-heading">عناوين تبرعاتي</h3>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <Slider/>
                </div>
                <div className="col-lg-9 col-12">
                    <div className="card">
                        <div className="content">
                            <h3 className="content-title">عناوين تبرعاتي</h3>
                            <div className="content-item">
                                <div className="logo">
                                    <img src={"./images/DonatesLocations.svg"} alt="Donates Locations"/>
                                </div>
                                <div className="content-item-details">
                                    <h5 className="content-item-details-title">مسجد الإيمان</h5>
                                    <span className="content-item-details-location">
                                        <FontAwesomeIcon icon="fa-solid fa-location-arrow" className="content-item-details-location-icon"/>
                                        المدينة المنورة شارع العوالي
                                    </span>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="logo">
                                    <img src={"./images/DonatesLocations.svg"} alt="Donates Locations"/>
                                </div>
                                <div className="content-item-details">
                                    <h5 className="content-item-details-title">مسجد الإيمان</h5>
                                    <span className="content-item-details-location">
                                        <FontAwesomeIcon icon="fa-solid fa-location-arrow" className="content-item-details-location-icon"/>
                                        المدينة المنورة شارع العوالي
                                    </span>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="logo">
                                    <img src={"./images/DonatesLocations.svg"} alt="Donates Locations"/>
                                </div>
                                <div className="content-item-details">
                                    <h5 className="content-item-details-title">مسجد الإيمان</h5>
                                    <span className="content-item-details-location">
                                        <FontAwesomeIcon icon="fa-solid fa-location-arrow" className="content-item-details-location-icon"/>
                                        المدينة المنورة شارع العوالي
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
