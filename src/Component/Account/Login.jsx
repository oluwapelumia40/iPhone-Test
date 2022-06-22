import React from 'react';
import { Link } from 'react-router-dom';
import "./form.css";

export default function Login() {
  return (
    <div class="form">
 		    <form class="register-form">
             <input type="email" name="email" placeholder="email"/>
 			<input type="password" name="password" placeholder="password"/>
 			<button>Login</button>
             <p class="message">Not registered? <Link to="/form">Register</Link></p>
 			</form>
        </div>
  )
}
