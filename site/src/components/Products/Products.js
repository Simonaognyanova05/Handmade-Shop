import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import ProductItem from "./ProductItem";
import "./Products.css";
import { useNavigate } from "react-router-dom";

export default function Products() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // 🟡 pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

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
                console.error("An error occurred while loading.:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this article?");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "products", id));
            setProducts((prev) => prev.filter((p) => p.id !== id));
            navigate('/products');
        } catch (error) {
            console.error("An error occured while deliting:", error);
            alert("An error occured while deleting the article!");
        }
    };

    // 🧮 Pagination logic
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll
        }
    };

    if (loading) {
        return <p style={{ textAlign: "center" }}>Loading...</p>;
    }

    return (
        <>
            <div className="page-heading products-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h4>new arrivals</h4>
                                <h2>{products.length} articles</h2>
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
                               
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="filters-content">
                                <div className="row grid">
                                    {currentProducts.map((product) => (
                                        <ProductItem
                                            key={product.id}
                                            product={product}
                                            onDelete={handleDelete}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {totalPages > 1 && (
                            <div className="col-md-12">
                                <ul className="pages">
                                    <li>
                                        <button
                                            disabled={currentPage === 1}
                                            onClick={() => goToPage(currentPage - 1)}
                                        >
                                            &lt;
                                        </button>
                                    </li>

                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <li key={i}>
                                            <button
                                                className={currentPage === i + 1 ? "active" : ""}
                                                onClick={() => goToPage(i + 1)}
                                            >
                                                {i + 1}
                                            </button>
                                        </li>
                                    ))}

                                    <li>
                                        <button
                                            disabled={currentPage === totalPages}
                                            onClick={() => goToPage(currentPage + 1)}
                                        >
                                            &gt;
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
