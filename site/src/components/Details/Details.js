import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/getProductById"; // 👈 новия service
import "./Details.css";

export default function Details() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

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

    return (
        <main className="details-page">
            {/* Галерия */}
            <div className="product-gallery">
                <img
                    src={product.img1}
                    alt={product.title}
                    className="main-image"
                />
                <div className="thumbnails">
                    <img src={product.img2} alt="test" />
                    <img src={product.img3} alt="test" />
                    <img src={product.img4} alt="test" />
                    <img src={product.img5} alt="test" />
                </div>
            </div>

            {/* Инфо */}
            <div className="product-info">
                <h1>{product.title}</h1>

                <div className="price">{product.priceLv} лв</div>

                <p className="description">
                    {product.description || "Няма описание за този продукт."}
                </p>

                <div className="option">
                    <h3>Размер</h3>
                    <div className="sizes">
                        {product.sizes?.map((size, i) => (
                            <button key={i}>{size}</button>
                        ))}
                    </div>
                </div>

                <div className="option">
                    <label>Добавете информация за вашия колаж (ако е необходимо):</label>
                    <textarea placeholder="Дата, текст, номера, имена..."></textarea>
                </div>

                <button className="upload-btn">📷 Изберете снимки</button>
                <button className="cart-btn">🛒 ДОБАВИ В КОЛИЧКАТА</button>
            </div>
        </main>
    );
}
