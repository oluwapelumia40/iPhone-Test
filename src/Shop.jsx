import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";

function Shop() {

    const [color, setColor] = useState("red");

    return (
        <div>
            <Header/>
            <div className="shop-header-text">
                <h1>
                Which iPhone is right for you?
                </h1>
            </div>
            <div className="row shop-container">
                <div className="col-md-3 shop-image">
                    <img src="/image/iPhone13.png"/>
                <div className="circle">
                    <div className="dot"></div>
                    <div className="dot-red"></div>
                    <div className="dot-blue"></div>
                    <h6> New </h6>
                    <h5> iPhone 13 Pro</h5>
                    <p> The ultimate iPhone. </p>
                    <section> From £949 </section>
                    <Link to="" className="btn btn-primary buy-shop"> Buy</Link>
                </div>
                </div>
                <div className="col-md-3 shop-image1">
                    <img src="/image/iPhone13.png"/>
                    <div className="circle">
                    <div className="dot"></div>
                    <div className="dot-red"></div>
                    <div className="dot-blue"></div>
                    <h6> New </h6>
                    <h5> iPhone 13 Pro</h5>
                    <p> A total powerhouse. </p>
                    <section> From £949 </section>
                    <Link to="" className="btn btn-primary buy-shop"> Buy</Link>
                </div>
                </div>
                <div className="col-md-3 shop-image2">
                    <img src="/image/iPhone13.png"/>
                    <div className="circle">
                    <div className="dot"></div>
                    <div className="dot-red"></div>
                    <div className="dot-blue"></div>
                    <div className="dot-black"></div>
                    <h6> New </h6>
                    <h5> iPhone SE</h5>
                    <p> Serious power & value. </p>
                    <section> From £949 </section>
                    <Link to="" className="btn btn-primary buy-shop"> Buy</Link>
                </div>
                </div>
                <div className="col-md-3 shop-image3">
                    <img src="/image/iPhone13.png"/>
                    <div className="circle">
                    <div className="dot"></div>
                    <div className="dot-red"></div>
                    <div className="dot-blue"></div>
                    <div className="dot-black"></div>
                    <h5> iPhone 13 Pro</h5>
                    <p> As amazing as ever. </p>
                    <section> From £949 </section>
                    <Link to="" className="btn btn-primary buy-shop"> Buy</Link>
                </div>
                </div>
            </div>

            <div className="iphone-details">
                    <img src="/image/details-image.jpg"/>
                </div>
            <div className="middle-text">
                    <p> Ways to buy </p>
            <div className="row buyText">
                <div className="col-md-6">
                    <h3> Trade in your smartphone for credit. </h3>
                    <p> With Apple Trade In, you can get credit towards a new iPhone when you trade in an eligible smartphone.* It’s good for you and the planet. </p>
                    <Link to=""> Learn more </Link> 
                </div>

                <div className="col-md-6">
                    <h3> Why Apple is the best place to buy iPhone. </h3>
                    <p> You can choose a payment option that works for you, pay less with a trade‑in, get set up quickly, and chat with a Specialist anytime. </p>
                    <Link to=""> Learn more </Link>
                </div>
            </div>
            </div>

            <h1> The color will change {color}</h1>

            <button type="button" onClick={() => setColor('green == pagination')}> click Me!</button>
            <button type="button" onClick={() => setColor('black')}> click Me!</button>

            <Footer/>
        </div>
    );
}
export default Shop;
