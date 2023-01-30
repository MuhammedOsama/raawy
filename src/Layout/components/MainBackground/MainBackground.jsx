import React from "react"
import {Carousel} from "react-bootstrap";

// style
import "./MainBackground.scss";

export default function MainBackground() {
    return <div id="main-background">
        <Carousel>
            <Carousel.Item>
                <img className="banner" src={"./images/Background.png"} alt="First slide"/>
                <Carousel.Caption>
                    <h3 className="carousel-caption-title">شركتنا متعة العطاء</h3>
                    <p className="carousel-caption-desc">لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولا يزال المعيار للنص الشكلي.</p>
                    <button className="carousel-caption-btn">تبرع الآن</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="banner" src={"./images/Background.png"} alt="First slide"/>
                <Carousel.Caption>
                    <h3 className="carousel-caption-title">شركتنا متعة العطاء</h3>
                    <p className="carousel-caption-desc">لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولا يزال المعيار للنص الشكلي.</p>
                    <button className="carousel-caption-btn">تبرع الآن</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="banner" src={"./images/Background.png"} alt="First slide"/>
                <Carousel.Caption>
                    <h3 className="carousel-caption-title">شركتنا متعة العطاء</h3>
                    <p className="carousel-caption-desc">لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولا يزال المعيار للنص الشكلي.</p>
                    <button className="carousel-caption-btn">تبرع الآن</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="banner" src={"./images/Background.png"} alt="First slide"/>
                <Carousel.Caption>
                    <h3 className="carousel-caption-title">شركتنا متعة العطاء</h3>
                    <p className="carousel-caption-desc">لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولا يزال المعيار للنص الشكلي.</p>
                    <button className="carousel-caption-btn">تبرع الآن</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
}
