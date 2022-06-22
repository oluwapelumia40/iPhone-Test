import React from 'react'
import Header from '../Header/Header'

export default function addressDetails() {
  return (
    <div>
        <Header/>
        <div className="container">
            <span> CHECKOUT </span>
            <div className="row">
            <h4> 1. ADDRESS DETAILS </h4>
            <div className="col-md-8">
                <div className="row">
                    <div className="col-md-4">
                        <label> First Name * </label>
                        <input type="text" name="firstName" placeholder='First Name' />
                    </div>
                    <div className="col-md-4">
                        <label> Last Name *</label>
                        <input type="text" name="lastName" placeholder='First Name' />
                    </div>
                </div>

                <div className="col-md-8">
                    <label> Mobile phone number * </label>
                    <input type="text" name="address" placeholder='Delivery Address' />
                </div>
                
            </div>
         </div>
        </div>
    </div>
  )
}
