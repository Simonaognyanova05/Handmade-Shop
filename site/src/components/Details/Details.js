import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/getProductById";
import { addToCart } from "../../services/addToCart"; // 👈 нов
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
        <main className="details-page">
            <div className="product-gallery">
                <img src={product.img1} alt={product.title} className="main-image" />
                {/* <div className="thumbnails">
                    {product.img2 && <img src={product.img2} alt="thumb2" />}
                    {product.img3 && <img src={product.img3} alt="thumb3" />}
                    {product.img4 && <img src={product.img4} alt="thumb4" />}
                    {product.img5 && <img src={product.img5} alt="thumb5" />}
                </div> */}
            </div>

            <div className="product-info">
                <h1>{product.title}</h1>
                <div className="price">{product.priceLv} лв</div>
                <p className="description">
                    {/* {product.description || "Няма описание за този продукт."} */}
                    
                </p>


            </div>
        </main>
    );
}
