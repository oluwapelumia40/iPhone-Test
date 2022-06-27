import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Register } from '../Content/ApiCall';
import { UserContext } from '../Content/Context';
import "./form.css";

export default function Form() {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [userName, setUserName] = useState("")
	const [phone, setPhone] = useState("+234")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirm_password, setConfirm_password] = useState("")
	const {isFetching, error, dispatch} = useContext(UserContext)
	const RegisterHandle = (e) =>{
		e.preventDefault()
		Register({firstName, lastName, userName, email, phone, password, confirm_password}, dispatch)
	}

  return (
    
        <div class="form">
 		    <form onSubmit={RegisterHandle} class="register-form">
			 <input type="text" name="firstName" value={firstName} onChange={(e)=> {setFirstName(e.target.value)}} placeholder="First Name"/>
			 <input type="text" name="lastName" value={lastName} onChange={(e)=> {setLastName(e.target.value)}} placeholder="Last Name"/>
 			 <input type="text" name="username" value={userName} onChange={(e)=> {setUserName(e.target.value)}} placeholder="user name"/>
			 <input type="text" name="phone" value={phone} onChange={(e)=> {setPhone(e.target.value)}} placeholder="Phone Number"/>
			 <input type="email" name="email" value={email} onChange={(e)=> {setEmail(e.target.value)}} placeholder="email"/>
 			 <input type="password" name="password" value={password} onChange={(e)=> {setPassword(e.target.value)}} placeholder="password"/>
			 <input type="password" name="confirm_password" value={confirm_password} onChange={(e)=> {setConfirm_password(e.target.value)}} placeholder="confirm password"/> 
 			 <button type='submit'>create</button>
			  <span> {error} </span>
 		    <p class="message">Already Registered? <Link to="/login"> Login </Link></p>
 			</form>
        </div>

  )
}
