import { useState } from "react";
import {useAuthContext} from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isloading, setIsLoading] = useState(null) // This is going to be True when we start the request (allows to present a visual loading state on the button, for instance)
    const {dispatch} = useAuthContext() // will be used to update auth context

    // We create an async function for signing up users
    const signup = async (email,password) => {
        setIsLoading(True)
        setError(null)

        const response = await fetch('/api/user/signup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
        })
        const json = await response.json() // if success - this returns some information with the json web token; if it wasn't a success, this is going to return an error

        if (!response.ok){ // read as: if it's not okay, if we have a problem:
            setIsLoading(false) // because now we're not loading
            setError(json.error) // there is a problem, we raise an error
        }

        if (response.ok){ // read as: "if the response is okay"
            
            // The following saves the user to local storage
            localStorage.setItem('user',JSON.stringify(json))
            // The following updates auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return {signup, isloading, error}
}