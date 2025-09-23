import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <h2>Sixteen <em>Clothing</em></h2>
                    </NavLink>
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
                                    Начало
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                    Нашите продукти
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                    За нас
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contacts" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                    Контакти
                                </NavLink>
                            </li>
                            {/* 🛒 Количка */}
                            <li className="nav-item">
                                <NavLink to="/cart" className={({ isActive }) => "nav-link cart-link" + (isActive ? " active" : "")}>
                                    <i className="fa fa-shopping-cart"></i> <span className="cart-count">2</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
