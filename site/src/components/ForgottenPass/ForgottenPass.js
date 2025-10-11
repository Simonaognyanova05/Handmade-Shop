import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { resetPassword } from '../../services/resetPassword'; // твоята service функция

export default function ForgottenPass() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await resetPassword(email);
            alert("We have sent you an email to reset your password!");
            navigate("/login");
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                alert("User with this email does not exist.");
            } else if (error.code === 'auth/invalid-email') {
                alert("Invalid Email.");
            } else {
                alert("Error: " + error.message);
            }
        }
    };

    return (

        <div className="login-page">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>E-Mail</label>
                        <input type="email" placeholder="Enter your E-mail" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <button type="submit" className="login-btn">Login</button>

                    <div className="extra-links">
                        <Link to="/login">Back to Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
