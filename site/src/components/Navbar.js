import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    <i class="fas fa-film mr-2"></i>
                    Catalog-Z
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link nav-link-1 active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link nav-link-2" to="videos.html">Videos</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link nav-link-3" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link nav-link-4" to="/contacts">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}