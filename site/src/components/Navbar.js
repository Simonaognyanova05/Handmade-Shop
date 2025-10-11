import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
    const { user } = useAuth();

    const unlogged = (
        <>
            <li className="nav-item">
                <NavLink to="/login" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    Login
                </NavLink>
            </li>
        </>
    );

    const logged = (
        <>
            <li className="nav-item">
                <NavLink to="/create" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    Create article
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/messages" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    Messages
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/logout" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    Logout
                </NavLink>
            </li>

        </>
    );
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <h2>Perfectly <em>Splendid</em></h2>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/" end className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contacts" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                    Contacts
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                    Articles
                                </NavLink>
                            </li>
                            {Boolean(user.email) ? logged : unlogged}

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
