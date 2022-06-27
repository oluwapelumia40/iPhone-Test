import React from 'react'
import { useState } from 'react'
import "./header.css"
import "bootstrap"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { green } from '@mui/material/colors';

export default function Header() {
  const [state, setAccount] = useState(false)
  const showDropdown=()=>{
    setAccount(true);
  }
  const hideDropdown=()=>{
    setAccount(false);
  }
  return (

    <div className="navBar">
    <img src="/logo/appleLogo.png" className="logo"/>


    <div className="search-box">
      <input type="text" className='input-search' placeholder='Enter the Product Name'/>
      <SearchIcon style={{cursor:'pointer'}}/>
    </div>

    <div className="nav">
        <ul>
         <li> <a href="/"> Home </a> </li>
         <li> <a href="/shop"> Shop </a> </li>
         <li> <a href="/cart"> Add Cart </a> </li>
         <li> <a href="/"> Check Out </a> </li>
        </ul>
        
        <div className="dropdownMenu" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
        <a href='#'> Account</a> 

          {state ? (<div className="dropDownList" onMouseEnter={showDropdown}>
            <li> <a href='#'> Profile</a> </li>
            <li> <a href='/login'> Login</a></li>
            <li> <a href='form'> Register</a></li>
          </div> 
          ): null}
          
         </div>  <span> <ArrowDropDownIcon/> </span>
    </div>
</div>
  )
}
