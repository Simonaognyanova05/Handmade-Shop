import { useEffect, useState } from "react";
import { getProducts } from "../../services/getProducts";
import ProductItem from "./ProductItem";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            const data = await getProducts();
            setProducts(data);
            setLoading(false);
        }
        fetchProducts();
    }, []);

    if (loading) {
        return <p style={{ textAlign: "center" }}>Зареждане...</p>;
    }

    return (
        <>
            <div className="page-heading products-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h4>new arrivals</h4>
                                <h2>{products.length} products</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="filters">
                                <ul>
                                    <li className="active" data-filter="*">All Products</li>
                                    <li data-filter=".des">Featured</li>
                                    <li data-filter=".dev">Flash Deals</li>
                                    <li data-filter=".gra">Last Minute</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="filters-content">
                                <div className="row grid">
                                    {products.map((product) => (
                                        <ProductItem key={product.id} product={product} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <ul className="pages">
                                <li><a href="#">1</a></li>
                                <li className="active"><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
