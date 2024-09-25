import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading } = useSignup();
    const [formError, setFormError] = useState(null); // State for form validation error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError(null); // Reset form error before validation
        if (!email || !password) {
            setFormError('Please fill in all fields.'); // Set form error if validation fails
            return; // Exit the function if validation fails
        }

        console.log("Signup, inside handlesubmit, before await");
        await signup(email, password); // Call signup function
        console.log("Signup, inside handlesubmit, after await");

        // Optional: Reset fields after successful signup
        setEmail('');
        setPassword('');
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>

            <label>Email:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading}>
                {isLoading ? 'Signing up...' : 'Sign up'}
            </button>
            {formError && <div className="error">{formError}</div>} {/* Display form validation error */}
            {error && <div className="error">{error}</div>} {/* Display signup error from useSignup */}
        </form>
    );
}

export default Signup;
