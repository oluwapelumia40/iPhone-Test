import React from "react";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import "./style.css";

function Home() {
    return (

        <div className="main-body">
            <Header/>
            <div className="header">
                <div className="row1">
                    <div className="col1">
                        <h2> iPhone 13 Pro Max <br/> Haptic Touch</h2>
                        <h3> Super Retina XDR display</h3>
                        <p> (New 16‑core Neural Engine)</p>
                        <h3> $3250</h3>
                        <button type="submit" className="btn-buy"> Buy Now</button>
                    </div>
                    <div className="col2">
                        <img src="/image/iPhone.png" className="iPhone1"/>
                    </div> 
                </div>

                <div className="upper-card-image-text">
                <h3> The latest. Take a look at what’s new right now. </h3>
                </div>
                
                <div className="card-img-full">
                    
                    <div className="card-image">
                    <img src="/card-image/img1.jpg" alt="Apple Screen"/>
                    <section> MACBOOK AIR WITH M2 CHIP </section>
                    <h1>Don't take it lightly</h1>
                    <p> From $1,800 </p>
                    </div>

                    <div className="card-image">
                    <img src="/card-image/img2.jpg" alt="Apple Laptop"/>
                    <div className="card-image-text">
                    <section> MACBOOK AIR WITH M2 CHIP </section>
                    <h1>Don't take it lightly</h1>
                    <p> From $1,800 </p>
                    </div>
                    </div>

                    <div className="card-image">
                    <img src="/card-image/img3.jpg" alt="Apple Laptop"/>
                    <section> MACBOOK AIR WITH M2 CHIP </section>
                    <h1>Don't take it lightly</h1>
                    <p> From $1,800 </p>
                    </div>
                    
                </div>

                <div className="imageBody">
                <div className="col3">
                        <h1> iOS 16</h1>
                        <img src="/image/largeImage.jpg" className="largeImg"/>
                        <p className="homeText1"> Personalise your Lock Screen with photos, customised widgets, even the way you get notifications. Create a Shared Photo Library to share photos and videos with loved ones. Enhance everyday moments with powerful new features in Messages and Mail. </p>
                    <button type="button" className="previewBtn"> <a href="/"> see the preview</a> </button>

                    </div>
                </div>
         </div>
                <Footer/>

        </div> 
        
    );
}

export default Home;








