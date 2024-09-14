import { useState } from "react"

// Almost the same as SignupPage.js, with minor modifications


// This function returns a login form, displaying: a title "Log in", 
// two input fields (email and password, where the password characters are not visible on the screen)
// and a button that says "Log in".
// Clicking on this button files a submit event on the form, 
// which is handled by the function 'handleSubmit' called by onSubmit.

const Login = () => {
    const [email, setEmail] = useState('') // email state
    const [password, setPassword] = useState('') // password state

    // In "return" below, we will have a button that says 'Log in' (ideal use would be after filling in an email and a password in the form).
    // This 'handleSubmit' function handles the submit event caused by clicking on that button.
    const handleSubmit = async (e) => { // async because we will want to make a request to the server
        e.preventDefault() // when we submit a form, the default event is to refresh the page, and we want to prevent that
        console.log(email, password)
}

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log in</h3> 

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

            <button>Log in</button>
        </form>
    )
}


export default Login