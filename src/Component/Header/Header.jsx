import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className="navBar">
    <img src="/logo/appleLogo.png" className="logo"/>

    <form>
  <div class="input-group">
    <input type="text" class="form-control search-box" placeholder="Search"/>
      <button class="btn btn-dark search-btn" type="submit">
        Search
      </button>
  </div>
</form>

    <div className="nav">
        <ul>
         <li> <a href="/"> Home </a> </li>
         <li> <a href="/shop"> Shop </a> </li>
         <li> <a href="/cart"> Add Cart </a> </li>
         <li> <a href="/"> Check Out </a> </li>
         <li> <a href="/"> Thank you </a> </li>
        </ul>
    </div>
</div>
  )
}
