import axios from 'axios';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from './Action';

export const Register = async(cred, dispatch) =>{
        try { 
            dispatch({type: LOGIN_START})
            const {data} = await axios.post("https://ecommerces-api.herokuapp/api/register", cred);
            if (data) {
                dispatch({type: LOGIN_SUCCESS, payload: data.user})
                localStorage.setItem("user", JSON.stringify(data.user))
                localStorage.setItem("token", data.token)
            }
            
        } catch (error) {
            console.log(error.response)
            dispatch({type: LOGIN_FAILURE, payload:error})
            
        }
}

export const Sign = async(cred, dispatch) => {
    try {
        dispatch({type:LOGIN_START})
        const {data} = await axios.post("https://ecommerces-api.herokuapp.com/api/login", cred)
        if (data) {
            localStorage.setItem("user", JSON.stringify(data.user))
            localStorage.setItem("token", data.token)
            dispatch({type:LOGIN_SUCCESS, payload:data.user})
        }
    } catch (error) {
            console.log(error.response.data.message)
            dispatch({type:LOGIN_FAILURE, payload:error.response.data.message})
    }
}