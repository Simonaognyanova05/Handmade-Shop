import './ProductItem.css';
import { Link, useNavigate } from "react-router-dom";

export default function ProductItem({ product, onDelete }) {
    const navigate = useNavigate();

    const handleEdit = () => navigate(`/edit/${product.id}`);
    const handleDelete = () => onDelete(product.id);

    return (
        <div className="col-lg-4 col-md-4 all des">
            <div className="product-item">
                <div className="product-img">
                    <img src={product.img1} alt={product.title} />
                </div>

                <Link to={`/products/${product.id}`}> <div className="down-content">
                    <h4>{product.title}</h4>
                    <p>{product.subtitle}</p>

                    <div className="product-actions">
                        <button className="btn edit-btn" onClick={handleEdit}>
                            Редактиране
                        </button>
                        <button className="btn delete-btn" onClick={handleDelete}>
                            Изтриване
                        </button>
                    </div>
                </div></Link>
            </div>
        </div>
    );
}
