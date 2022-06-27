
export const LOGIN_START = (userCredentials) =>{
   return {
    type: LOGIN_START
   }
}

export const LOGIN_SUCCESS = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const LOGIN_FAILURE = (error) => {
    return{
        type: LOGIN_FAILURE,
        payload: error
    }
}