
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <h2>Sixteen <em>Clothing</em></h2>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Our Products</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacts">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}