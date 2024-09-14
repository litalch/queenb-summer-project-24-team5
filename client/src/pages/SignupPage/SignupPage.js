import { useState } from "react"


// This function returns a sign up form, displaying: a title "Sign up", 
// two input fields (email and password, where the password characters are not visible on the screen)
// and a button that says "Sign up".
// Clicking on this button files a submit event on the form, 
// which is handled by the function 'handleSubmit' called by onSubmit.

const Signup = () => {
    const [email, setEmail] = useState('') // email state
    const [password, setPassword] = useState('') // password state

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
        </form>
    )
}