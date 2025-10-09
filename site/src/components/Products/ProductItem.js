import './ProductItem.css';
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
    return (
        <div className="col-lg-4 col-md-4 all des">
            <div className="product-item">
                <div className="product-img">
                    <img src={product.img1} alt={product.title} />
                </div>

                <div className="down-content">
                    <Link to={`/products/${product.id}`}>
                        <h4>{product.title}</h4>
                    </Link>
                    <p>{product.subtitle}</p>

                    
                        <div className="product-actions">
                            <button
                                className="btn edit-btn"
                               
                            >
                                Редактиране
                            </button>
                            <button
                                className="btn delete-btn"
                                
                            >
                                Изтриване
                            </button>
                        </div>
                    
                </div>
            </div>
        </div>
    );
}
