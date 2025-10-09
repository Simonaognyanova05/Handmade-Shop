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
                    <Link to="#">
                        <h4>{product.title}</h4>
                    </Link>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
}
