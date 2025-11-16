import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/getProductById";
import { addToCart } from "../../services/addToCart";
import { auth } from "../../config/firebase";
import "./Details.css";

export default function Details() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [note, setNote] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const result = await getProductById(id);
                if (result) {
                    setProduct(result);
                } else {
                    setError("Продуктът не е намерен!");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Зареждане...</p>;
    if (error) return <p className="error">{error}</p>;
    if (!product) return null;

    const handleAddToCart = async () => {
        if (!auth.currentUser) {
            alert("Моля, влезте в профила си!");
            return;
        }
        if (!selectedSize) {
            alert("Моля, изберете размер!");
            return;
        }

        try {
            await addToCart(auth.currentUser.uid, product, { selectedSize, note });
            alert("Продуктът е добавен в количката!");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <main className="details-wrapper">

            <article className="details-article">

                {/* Заглавие */}
                <h1 className="details-title">{product.title}</h1>

                {/* Subtitle = Price / tagline */}
                <div className="details-subtitle">{product.subtitle}</div>
                {/* Изображение */}
                <img src={product.img1} alt={product.title} className="details-cover" />



                {/* Описание */}
                <div
                    className="details-content"
                    dangerouslySetInnerHTML={{
                        __html: product.description || "<p>Няма описание.</p>"
                    }}
                />

            </article>

        </main>
    );

}
