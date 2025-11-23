import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../../services/getProductById";
import { writeComment } from "../../services/writeComment";
import { getComments } from "../../services/getComments";
import CommentItem from "./CommentItem";
import "./Details.css";

export default function Details() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const result = await getProductById(id);
                if (result) setProduct(result);
                else setError("Продуктът не е намерен!");
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    useEffect(() => {
        loadComments();
    }, [id]);

    async function loadComments() {
        try {
            const res = await getComments(id);
            setComments(res);
        } catch (err) {
            console.log(err);
        }
    }

    const commentHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        let { names, comment } = Object.fromEntries(formData);

        let result = await writeComment({
            names,
            comment,
            productId: id, // важна добавка
        });

        if (result.status === 200) {
            e.target.reset();
            loadComments();
        }
    };

    if (loading) return <p>Зареждане...</p>;
    if (error) return <p className="error">{error}</p>;
    if (!product) return null;

    return (
        <>
            <main className="details-wrapper">
                <article className="details-article">
                    <h1 className="details-title">{product.title}</h1>
                    <div className="details-subtitle">{product.subtitle}</div>
                    <img src={product.img1} alt={product.title} className="details-cover" />

                    <div
                        className="details-content"
                        dangerouslySetInnerHTML={{
                            __html: product.description || "<p>Няма описание.</p>",
                        }}
                    />
                </article>
            </main>

            <div className="comments-wrapper">
                <h3 className="comments-title">What Our Clients Say</h3>

                <div className="comments-section">
                    <div className="comments-list">
                        {comments.length > 0 ? (
                            comments.map((c) => <CommentItem key={c.id} comment={c} />)
                        ) : (
                            <p>No comments.</p>
                        )}
                    </div>

                    <form className="comment-form" onSubmit={commentHandler}>
                        <input name="names" type="text" placeholder="Full Name" required />
                        <textarea name="comment" rows="5" placeholder="Your Comment" required></textarea>
                        <button type="submit">Send Comment</button>
                    </form>
                </div>
            </div>
        </>
    );
}