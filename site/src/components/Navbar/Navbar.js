import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import './Navbar.css';

export default function Navbar() {
  const { user } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logged = (
    <>
      <li className="nav-item">
        <NavLink to="/create" className="nav-link">
          Add article
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/createMovie" className="nav-link">
          Add films
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/messages" className="nav-link">
          Messages
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/logout" className="nav-link">
          Logout
        </NavLink>
      </li>
    </>
  );

  return (
    <header className={scrolled ? "background-header" : ""}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* === Brand + Logo === */}
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img
              src="/assets/images/PerfectlySplendid.png"
              alt="Logo"
              className="navbar-logo"
            />
            <h2>
              Perfectly Splendid
            </h2>
          </a>

          {/* === Mobile toggle === */}
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

          {/* === Navigation === */}
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <NavLink to="/movies" className="nav-link">
                  Our Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacts" className="nav-link">
                  Contacts
                </NavLink>
              </li>
              {Boolean(user?.email) && logged}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
