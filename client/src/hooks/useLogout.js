import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
// we don't actully need to send a request to the backend. 
// we only need to change the state and delete the token from the local storage
const Logout = () => { 
    const {dispatch} = useAuthContext()

    // The following removes user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({type: 'LOGOUT'})
}

return {Logout}
}