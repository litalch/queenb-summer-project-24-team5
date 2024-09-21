import { useState } from "react"
import { useSignup } from "../../hooks/useSignup"


// Almost the same as LoginPage.js, with minor modifications

// This function returns a sign up form, displaying: a title "Sign up", 
// two input fields (email and password, where the password characters are not visible on the screen)
// and a button that says "Sign up".
// Clicking on this button files a submit event on the form, 
// which is handled by the function 'handleSubmit' called by onSubmit.

const Signup = () => {
    const [email, setEmail] = useState('') // email state
    const [password, setPassword] = useState('') // password state
    const {signup, error, isloading} = useSignup() // invoking signup hook

    // In "return" below, we will have a button that says 'sign up' (ideal use would be after filling in an email and a password in the form).
    // This 'handleSubmit' function handles the submit event caused by clicking on that button.
    const handleSubmit = async (e) => { // async because we will want to make a request to the server
        e.preventDefault() // when we submit a form, the default event is to refresh the page, and we want to prevent that
        
        await signup(email, password)
}

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3> 

            <label>Email:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)} // when the value of this changes, we want to update the email state from above
                value={email} // if we change the state from above, we want it to reflect the change in here            
             />

            <label>Password:</label>
            <input
                type="password" // so the input is hidden on the screen (dots or something)
                onChange={(e) => setPassword(e.target.value)} // when the value of this changes, we want to update the password state from above
                value={password} // if we change the state from above, we want it to reflect the change in here            
             />

            <button>Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}


export default Signup