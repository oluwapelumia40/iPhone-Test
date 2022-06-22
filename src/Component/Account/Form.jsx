import React from 'react'
import { Link } from 'react-router-dom';
import "./form.css";

export default function Form() {
  return (
    
        <div class="form">
 		    <form class="register-form">
 			<input type="text" name="username" placeholder="user name"/>
 			<input type="password" name="password" placeholder="password"/>
 			<input type="email" name="email" placeholder="email"/>
 			<button>create</button>
 		    <p class="message">Already Registered? <Link to="/login"> Login </Link></p>
 			</form>
        </div>

  )
}
