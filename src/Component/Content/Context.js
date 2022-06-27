import { createContext, useReducer} from "react"
import { Reducer } from "./Reducer"


const Initial_State = {
    isFetching: false,
    user: null,
    error: false,
}

export const UserContext = createContext(Initial_State)

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, Initial_State)
        return (
            <UserContext.Provider value = { {
                isFetching: state.isFetching,
                user: state.user,
                error: state.error,
                dispatch
            } }>   
                {children}
            </UserContext.Provider>
        )
}