import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Вход</h2>
                <form>
                    <div className="form-group">
                        <label>Имейл</label>
                        <input type="email" placeholder="Въведете имейл" required />
                    </div>

                    <div className="form-group">
                        <label>Парола</label>
                        <input type="password" placeholder="Въведете парола" required />
                    </div>

                    <button type="submit" className="login-btn">Влез</button>

                    <div className="extra-links">
                        <Link to="/forgot-password">Забравена парола?</Link>
                        <span> | </span>
                        <Link to="/register">Регистрация</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
