import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sign } from '../Content/ApiCall';
import { UserContext } from '../Content/Context';
import "./form.css";

export default function Login() {
  const {user, error, isFetching, dispatch} = useContext(UserContext) 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const LoginHandle = (e) => {
    e.preventDefault()
    Sign({email,password}, dispatch)
  }
  return (
    <div class="form">
 		    <form onSubmit={LoginHandle} class="register-form">
          <input type="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="email"/>
 			    <input type="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="password"/>
 			    <button type='submit'>Login</button>
          <span> {error} </span>
          <p class="message">Not registered? <Link to="/form">Register</Link></p>
 			</form>
        </div>
  )
}
