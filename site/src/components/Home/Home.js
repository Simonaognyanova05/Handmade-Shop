import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchLatestProducts } from "../../services/fetchLatestProducts";
import { writeComment } from "../../services/writeComment";
import { getComments } from "../../services/getComments";
import CommentItem from "./CommentItem";

export default function Home() {
    const navigate = useNavigate();
    const [latestProducts, setLatestProducts] = useState([]);
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

    const commentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        let { names, comment } = Object.fromEntries(formData);

        let result = await writeComment({ names, comment });

        if (result.status == 200) {
            alert("Коментарът е създаден успешно!");
            e.target.reset();
            navigate('/');
        } else {
            console.log('Error!');
        }
    }

    useEffect(() => {
        getComments()
        .then(res => {
            setComments(res);
        })
        .catch(e => {
            console.log(e);
        })
    })

    return (
        <>
            <div className="banner header-text">
                <div className="owl-banner owl-carousel">
                    <div className="banner-item-01">
                        <div className="text-content"></div>
                    </div>
                    <div className="banner-item-02">
                        <div className="text-content">
                            <h4>Flash Deals</h4>
                            <h2>Get your best products</h2>
                        </div>
                    </div>
                    <div className="banner-item-03">
                        <div className="text-content">
                            <h4>Last Minute</h4>
                            <h2>Grab last minute deals</h2>
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

            <div className="happy-clients">
                <div className="container">
                    <div className="section-heading">
                        <h2>Latest Projects</h2>
                    </div>

                    {/* <div className="testimonials-grid">
                        {
                            comments.map(comment => <CommentItem key={comment.id} comment={comment} />)
                        }
                        
                    </div> */}
                </div>
            </div>

            {/* <div className="send-message">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Send us a Comment</h2>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="contact-form">
                                <form id="contact" onSubmit={commentHandler}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <input
                                                    name="names"
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Full Name"
                                                    required
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <textarea
                                                    name="comment"
                                                    rows="6"
                                                    className="form-control"
                                                    id="message"
                                                    placeholder="Your Comment"
                                                    required
                                                ></textarea>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="filled-button">
                                                    Send Comment
                                                </button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}
