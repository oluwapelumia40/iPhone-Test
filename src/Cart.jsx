import React from 'react'
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';

function Cart() {
  return (
        <div>
        <Header/>

        <div className="container">
            <div className="cart1">
                <img src='https://www.jumia.com.gh/assets_he/images/cart.668e6453.svg'/>
                <h4> Your cart is empty! </h4>
                <p> Browse our categories and discover our best deals!</p>
                <button type='button' className='btn btn-dark'> START SHOPPING</button>
            </div>

            <div className="list-item">
                <div className="row">
                    <div className="col-md-3">
                        <img src='https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/002313/1.jpg?2997'/>
                        <p> Apple iPhone 12 Pro Max - 128GB HDD - 6GB RAM - Gold</p>
                        <button type='button' className='btn btn-dark'> ADD TO CART</button>
                    </div>

                    <div className="col-md-3">
                        <img src='https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/355402/1.jpg?3440'/>
                        <p> Apple iPhone 12 Pro Max - 128GB HDD - 6GB RAM - Gold</p>
                        <button type='button' className='btn btn-dark'> ADD TO CART</button>
                    </div>

                    <div className="col-md-3">
                        <img src='https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/882415/1.jpg?5862'/>
                        <p> Apple iPhone 12 Pro Max - 128GB HDD - 6GB RAM - Gold </p>
                        <button type='button' className='btn btn-dark'> ADD TO CART</button>
                    </div>

                    <div className="col-md-3">
                        <img src='https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/002313/1.jpg?2997'/>
                        <p> Apple iPhone 12 Pro Max - 128GB HDD - 6GB RAM - Gold </p>
                        <button type='button' className='btn btn-dark'> ADD TO CART</button>
                    </div>

                    
                </div>
            </div>

            
        </div>

        <Footer/>
        </div>
  )
}

export default Cart;
