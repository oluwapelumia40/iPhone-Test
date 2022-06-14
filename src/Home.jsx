import React from "react";
import Footer from "./Component/Footer/Footer";
import "./style.css";

function Home() {


    return (
        <div className="main-body">
            
                <div className="navBar">
                    <img src="/logo/appleLogo.png" className="logo"/>
                    <div className="nav">
                        <ul>
                         <li> <a href="/"> Home </a> </li>
                         <li> <a href="/"> Shop </a> </li>
                         <li> <a href="/"> Add Cart </a> </li>
                         <li> <a href="/"> Check Out </a> </li>
                         <li> <a href="/"> Thank you </a> </li>
                        </ul>
                    </div>
                </div>
             
            <div className="header">
                <div className="row">
                    <div className="col-1">
                        <h2> iPhone 13 Pro Max <br/> Haptic Touch</h2>
                        <h3> Super Retina XDR display</h3>
                        <p> (New 16‑core Neural Engine)</p>
                        <h3> $3250</h3>
                        <button type="submit" className="btn-buy"> Buy Now</button>
                    </div>
                    <div className="col-2">
                        <img src="/image/iPhone.png" className="iPhone1"/>
                    </div> 
                </div>
                
                <div className="imageBody">
                <div className="col-3">
                        <h1> iOS 16</h1>
                        <img src="/image/largeImage.jpg" className="largeImg"/>
                        <p className="homeText1"> Personalise your Lock Screen with photos, customised widgets, even the way you get notifications. Create a Shared Photo Library to share photos and videos with loved ones. Enhance everyday moments with powerful new features in Messages and Mail. </p>
                    <button type="button" className="previewBtn"> <a href="/"> see the preview</a> </button>

                    </div>
                </div>
         </div>
        <div className="row1">
            
        </div>
                <Footer/>

        </div> 
        
    );
}

export default Home;








