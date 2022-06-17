import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";

function Shop() {
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
            

            <Footer/>
        </div>
    );
}
export default Shop;
