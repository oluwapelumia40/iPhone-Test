import React from 'react'
import { useState } from 'react'
import "./header.css"
import "bootstrap"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import {BrowserRouter, Route, Routes } from 'react-router-dom'

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


    
    
      <form>
        <div class="input-group">      
        <input type="text" class="form-control search-box" placeholder="Search"/>
        <SearchIcon/>
        </div>
      </form>

    <div className="nav">
        <ul>
         <li> <a href="/"> Home </a> </li>
         <li> <a href="/shop"> Shop </a> </li>
         <li> <a href="/cart"> Add Cart </a> </li>
         <li> <a href="/"> Check Out </a> </li>
        </ul>
        
        <div className="dropdownMenu" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
        Account 

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
