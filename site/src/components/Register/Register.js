import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Регистрация</h2>
                <form>
                    <div className="form-group">
                        <label>Имейл</label>
                        <input type="email" placeholder="Въведете имейл" required />
                    </div>

                    <div className="form-group">
                        <label>Парола</label>
                        <input type="password" placeholder="Въведете парола" required />
                    </div>

                    <div className="form-group">
                        <label>Потвърдете паролата</label>
                        <input type="password" placeholder="Потвърдете паролата" required />
                    </div>

                    <button type="submit" className="login-btn">Регистрация</button>

                    <div className="extra-links">
                        <Link to="/forgot-password">Забравена парола?</Link>
                        <span> | </span>
                        <Link to="/login">Вече имате профил?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
