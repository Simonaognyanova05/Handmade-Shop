import './Home.css';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchLatestProducts } from "../../services/fetchLatestProducts";
import { fetchLatestMovies } from "../../services/fetchLatestMovies";

export default function Home() {
    const navigate = useNavigate();
    const [latestProducts, setLatestProducts] = useState([]);
    const [latestMovies, setLatestMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchLatestProducts()
            .then(res => {
                setLatestProducts(res);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
            })
    }, []);
    useEffect(() => {
        fetchLatestMovies()
            .then(res => {
                setLatestMovies(res);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
            })
    }, []);

    return (
        <>
            {/* <div className="banner header-text">
                <div className="owl-banner owl-carousel">
                    <div className="banner-item-01">
                        <div className="text-content">
                            <h3>Perfectly Splendid</h3>
                            <h4>This is a small, evolving art project that lives somewhere between cinema, theatre, and everything else that refuses to fit neatly into a box.
                                We aim to make short films, stage things, and collaborations that speak honestly - even when they’re rough, weird, or unfinished. The plan is simple: create when we can, support others when we can’t, and keep the energy real either way.</h4>
                        </div>
                    </div>
                    <div className="banner-item-02">
                        <div className="text-content">
                            <h4>Our focus leans toward independent film and theatre, but we don’t stop there. Music videos, visual experiments, mixed-media stuff, micro-performances - if it comes from the heart and has something to say, it belongs here.</h4>
                        </div>
                    </div>
                    <div className="banner-item-03">
                        <div className="text-content">
                            <h4>This space exists to share what we make and what we love - work from independent artists whose ideas feel genuine, raw, or just beautifully strange. We’re not chasing mainstream attention, and we’re not faking “indie” either. We care about people who care about art - whatever form it takes.

                                Everything here is made or chosen with intention, even when it looks accidental.</h4>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="page-heading home-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="home-text" className="text-content big-home-text">
                                <h3 style={{ color: "white" }}>Who we are?</h3>

                                <p style={{ color: "white" }}>
                                    This is a small, evolving art project that lives somewhere between cinema, theatre,
                                    and everything else that refuses to fit neatly into a box. We aim to make short films,
                                    stage things, and collaborations that speak honestly – even when they’re rough, weird,
                                    or unfinished. The plan is simple: create when we can, support others when we can’t,
                                    and keep the energy real either way.
                                </p>

                                <p style={{ color: "white" }}>
                                    Our focus leans toward independent film and theatre, but we don’t stop there.
                                    Music videos, visual experiments, mixed-media work, micro-performances —
                                    if it comes from the heart and has something meaningful to say, it belongs here.
                                </p>

                                <p style={{ color: "white" }}>
                                    This space exists to share what we make and what we love — work from independent artists
                                    whose ideas feel genuine, raw, or just beautifully strange. We’re not chasing mainstream
                                    attention, and we’re not pretending to be “indie” either. Everything here is made or chosen
                                    with intention, even when it looks accidental.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="happy-clients">
                <div className="container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading">
                                    <h2>Latest Movies</h2>
                                </div>
                            </div>

                            {loading ? (
                                <p style={{ textAlign: "center" }}>Loading...</p>
                            ) : latestMovies.length === 0 ? (
                                <p style={{ textAlign: "center" }}>No movies yet.</p>
                            ) : (
                                latestMovies.map((product) => (
                                    <div className="col-md-4" key={product.id}>
                                        <div className="product-item">
                                            <Link to={`/movie/${product.id}`}>
                                                <img
                                                    src={product.img1 || "/assets/images/default.jpg"}
                                                    alt={product.title}
                                                />
                                            </Link>
                                            <div className="down-content">
                                                <Link to={`/movie/${product.id}`}>
                                                    <h4>{product.title}</h4>
                                                </Link>
                                                <p>{product.ganre || "Без описание"}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="latest-products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Latest Articles</h2>
                                <Link to="/products">
                                    view all articles <i className="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>

                        {loading ? (
                            <p style={{ textAlign: "center" }}>Loading...</p>
                        ) : latestProducts.length === 0 ? (
                            <p style={{ textAlign: "center" }}>No articles yet.</p>
                        ) : (
                            latestProducts.map((product) => (
                                <div className="col-md-4" key={product.id}>
                                    <div className="product-item">
                                        <Link to={`/products/${product.id}`}>
                                            <img
                                                src={product.img1 || "/assets/images/default.jpg"}
                                                alt={product.title}
                                            />
                                        </Link>
                                        <div className="down-content">
                                            <Link to={`/products/${product.id}`}>
                                                <h4>{product.title}</h4>
                                            </Link>
                                            <p>{product.subtitle || "Без описание"}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>


        </>
    );
}