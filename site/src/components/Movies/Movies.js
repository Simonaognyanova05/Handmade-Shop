import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import MovieItem from "./MovieItem";
import "./Movies.css";
import { useNavigate } from "react-router-dom";

export default function Movies() {
    const navigate = useNavigate();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    // 🟡 pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        async function fetchMovies() {
            try {
                const querySnapshot = await getDocs(collection(db, "movies"));
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setMovie(data);
            } catch (error) {
                console.error("An error occurred while loading.:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchMovies();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this movie?");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "movies", id));
            setMovie((prev) => prev.filter((p) => p.id !== id));
            navigate('/movies');
        } catch (error) {
            console.error("An error occured while deliting:", error);
            alert("An error occured while deleting the movie!");
        }
    };

    // 🧮 Pagination logic
    const totalPages = Math.ceil(movie.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = movie.slice(startIndex, startIndex + itemsPerPage);

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
            <div className="page-heading about-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h4>about us</h4>
                                <h2>our projects</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-members">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Our Projects</h2>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="products">
                    <div className="container">
                        <div className="row">
                                <div className="col-md-12">
                                    <div className="filters-content">
                                        <div className="row grid">
                                            {currentProducts.map((movie) => (
                                                <MovieItem
                                                    key={movie.id}
                                                    movie={movie}
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
            </div>
        </>
    );
}
