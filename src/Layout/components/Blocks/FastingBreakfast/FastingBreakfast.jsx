import React from "react";

// style
import "./FastingBreakfast.scss";

// fontawesome
import fontawesome from "@fortawesome/fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus, faTrash} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faPlus, faMinus, faTrash);

export default function FastingBreakfast() {
    return <div id="fasting-breakfast">
        <div className="content">
            <div className="card">
                <div className="card-content">
                    <div className="card-item">
                        <div className="logo">
                            <img src={"./images/Water.svg"} alt="Item Logo"/>
                        </div>
                        <div className="details">
                            <h6 className="details-title">جالون ماء</h6>
                            <span className="details-price">12 ريال</span>
                        </div>
                    </div>
                    <div className="card-count">
                        <FontAwesomeIcon icon="fa-solid fa-plus" className="card-count-icon plus"/>
                        <span className="card-count-number">1</span>
                        <FontAwesomeIcon icon="fa-solid fa-minus" className="card-count-icon minus"/>
                    </div>
                    <div className="card-remove">
                        <FontAwesomeIcon icon="fa-solid fa-trash" className="card-remove-icon"/>
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-item">
                        <div className="logo">
                            <img src={"./images/Rug.svg"} alt="Item Logo"/>
                        </div>
                        <div className="details">
                            <h6 className="details-title">سجادة صلاه</h6>
                            <span className="details-price">30 ريال</span>
                        </div>
                    </div>
                    <div className="card-count">
                        <FontAwesomeIcon icon="fa-solid fa-plus" className="card-count-icon plus"/>
                        <span className="card-count-number">1</span>
                        <FontAwesomeIcon icon="fa-solid fa-minus" className="card-count-icon minus"/>
                    </div>
                    <div className="card-remove">
                        <FontAwesomeIcon icon="fa-solid fa-trash" className="card-remove-icon"/>
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-item">
                        <div className="logo">
                            <img src={"./images/Rosary.png"} alt="Item Logo"/>
                        </div>
                        <div className="details">
                            <h6 className="details-title">سبحة</h6>
                            <span className="details-price">12 ريال</span>
                        </div>
                    </div>
                    <div className="card-count">
                        <FontAwesomeIcon icon="fa-solid fa-plus" className="card-count-icon plus"/>
                        <span className="card-count-number">1</span>
                        <FontAwesomeIcon icon="fa-solid fa-minus" className="card-count-icon minus"/>
                    </div>
                    <div className="card-remove">
                        <FontAwesomeIcon icon="fa-solid fa-trash" className="card-remove-icon"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
