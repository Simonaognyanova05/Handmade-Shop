import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import ProductItem from "./ProductItem";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const querySnapshot = await getDocs(collection(db, "products"));
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(data);
            } catch (error) {
                console.error("Грешка при зареждане на продуктите:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Сигурни ли сте, че искате да изтриете този продукт?");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "products", id));
            // ✅ премахва от UI без refresh
            setProducts((prev) => prev.filter((p) => p.id !== id));
        } catch (error) {
            console.error("Грешка при изтриване:", error);
            alert("Възникна грешка при изтриване на продукта.");
        }
    };

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
                                        <ProductItem
                                            key={product.id}
                                            product={product}
                                            onDelete={handleDelete}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {products.length > 6 && (
                            <div className="col-md-12">
                                <ul className="pages">
                                    <li><a href="#">1</a></li>
                                    <li className="active"><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
