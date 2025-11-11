import { useAuth } from '../../contexts/AuthContext';
import './ProductItem.css';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function ProductItem({ product, onDelete }) {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const fetchLikes = async () => {
            try {
                const productRef = doc(db, "products", product.id);
                const snap = await getDoc(productRef);
                if (snap.exists()) {
                    const data = snap.data();
                    setLikes(data.likesCount || 0);

                    const localLikes = JSON.parse(localStorage.getItem("likedProducts") || "[]");
                    if (localLikes.includes(product.id)) setLiked(true);
                }
            } catch (err) {
                console.error("Error loading likes:", err);
            }
        };
        fetchLikes();
    }, [product.id]);

    const handleLike = async () => {
        const productRef = doc(db, "products", product.id);

        try {
            const snap = await getDoc(productRef);
            if (!snap.exists()) return;

            const data = snap.data();
            let updatedLikes = data.likesCount || 0;

            let localLikedProducts = JSON.parse(localStorage.getItem("likedProducts") || "[]");

            if (liked) {
                updatedLikes = Math.max(updatedLikes - 1, 0);
                localLikedProducts = localLikedProducts.filter(id => id !== product.id);
            } else {
                updatedLikes++;
                localLikedProducts.push(product.id);
            }

            await updateDoc(productRef, {
                likesCount: updatedLikes,
            });

            localStorage.setItem("likedProducts", JSON.stringify(localLikedProducts));

            setLikes(updatedLikes);
            setLiked(!liked);
        } catch (err) {
            console.error("Error updating like:", err);
        }
    };

    const handleEdit = () => navigate(`/edit/${product.id}`);
    const handleDelete = () => onDelete(product.id);

    return (
        <div className="col-lg-4 col-md-4 all des">
            <div className="product-item">
                <div className="product-img">
                    <img src={product.img1} alt={product.title} />
                </div>

                <div className="down-content">
                    <Link to={`/products/${product.id}`}>
                        <h4>{product.title}</h4>
                        <p>{product.subtitle}</p>
                    </Link>
                </div>

                <div className="product-actions">
                    <button
                        className={`btn like-btn ${liked ? "liked" : ""}`}
                        onClick={handleLike}
                    >
                        {liked ? "❤️" : "🤍"} {likes}
                    </button>

                    {Boolean(user?.email) && (
                        <>
                            <button className="btn edit-btn" onClick={handleEdit} style={{ margin: '20px' }}>
                                Edit
                            </button>
                            <button className="btn delete-btn" onClick={handleDelete}>
                                Delete
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
