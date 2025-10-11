import { useAuth } from '../../contexts/AuthContext';
import './ProductItem.css';
import { Link, useNavigate } from "react-router-dom";

export default function ProductItem({ product, onDelete }) {
    const navigate = useNavigate();
    const {user} = useAuth();

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
                {
                    Boolean(user.email)
                    ?    <div className="product-actions">
                    <button className="btn edit-btn" onClick={handleEdit} style={{ margin: '20px' }}>
                        Edit
                    </button>
                    <button className="btn delete-btn" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
                : ''
                }
            </div>
        </div >
    );
}
