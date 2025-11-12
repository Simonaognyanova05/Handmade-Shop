import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/login";

export default function Login() {
    const navigate = useNavigate();
    const { onLogin } = useAuth();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const loginHandler = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const formData = new FormData(e.currentTarget);
        const { email, password } = Object.fromEntries(formData);

        try {
            const user = await login(email, password);
            onLogin(user);
            setSuccess("Successful login!");
            navigate('/movies');
        } catch (err) {
            console.error("LoginHandler error:", err.message);
            setError(err.message); // Показваме реалната грешка
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Login</h2>
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
                <form onSubmit={loginHandler}>
                    <div className="form-group">
                        <label>E-Mail</label>
                        <input type="email" placeholder="Enter your E-mail" name="email" required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" name="password" required />
                    </div>

                    <button type="submit" className="login-btn">Login</button>

                    <div className="extra-links">
                        <Link to="/forgottenPass">Forgotten password?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
