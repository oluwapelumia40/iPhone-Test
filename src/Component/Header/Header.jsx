import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className="navBar">
    <img src="/logo/appleLogo.png" className="logo"/>
    <div className="nav">
        <ul>
         <li> <a href="/"> Home </a> </li>
         <li> <a href="/shop"> Shop </a> </li>
         <li> <a href="/"> Add Cart </a> </li>
         <li> <a href="/"> Check Out </a> </li>
         <li> <a href="/"> Thank you </a> </li>
        </ul>
    </div>
</div>
  )
}
