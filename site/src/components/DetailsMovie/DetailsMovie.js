import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "../../services/addToCart";
import { auth } from "../../config/firebase";
import "./DetailsMovie.css";
import { getMovieById } from "../../services/getMovieById";

export default function DetailsMovie() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedMedia, setSelectedMedia] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const result = await getMovieById(id);
                if (result) {
                    setProduct(result);
                    setSelectedMedia(result.img1);
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

    // Проверка дали текущото е YouTube линк
    const isYouTube = (url) => url.includes("youtube.com") || url.includes("youtu.be");

    return (
        <main className="details-page">
            <div className="product-gallery">
                {/* Основно медия поле */}
                <div className="main-media">
                    {isYouTube(selectedMedia) ? (
                        <iframe
                            className="main-video"
                            src={selectedMedia.replace("watch?v=", "embed/")}
                            title="Product video"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <img src={selectedMedia} alt={product.title} className="main-image" />
                    )}
                </div>

                {/* Миниатюри */}
                <div className="thumbnails">
                    <img
                        src={product.img1}
                        alt="thumb1"
                        onClick={() => setSelectedMedia(product.img1)}
                    />
                    <img
                        src={product.img2}
                        alt="thumb2"
                        onClick={() => setSelectedMedia(product.img2)}
                    />
                    <div
                        className="thumb-video"
                        onClick={() => setSelectedMedia(product.video)}
                    >
                        🎬
                    </div>
                </div>
            </div>

            <div className="product-info">
                <h1>{product.title}</h1>
                <div className="price">{product.ganre}</div>

                <div
                    className="description"
                    dangerouslySetInnerHTML={{
                        __html: product.description || "<p>Няма описание за този продукт.</p>",
                    }}
                />
            </div>
        </main>
    );
}
