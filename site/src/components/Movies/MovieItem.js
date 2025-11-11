import { useAuth } from '../../contexts/AuthContext';
import './MovieItem.css';
import { Link, useNavigate } from "react-router-dom";

export default function MovieItem({ movie, onDelete }) {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleEdit = () => navigate(`/edit/${movie.id}`);
    const handleDelete = () => onDelete(movie.id);

    return (
        <>
            <div className="col-md-4">
                <div className="team-member">
                    <div className="thumb-container">
                        <img src={movie.img1} alt={movie.title} />
                        <div className="hover-effect">
                            <div className="hover-content">
                                <ul className="social-icons">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="down-content">
                        <Link to={`/movie/${movie.id}`}>
                            <h4>{movie.title}</h4>
                            <span>{movie.ganre}</span>
                            {movie.description && (
                                <div
                                    className="product-description"
                                    dangerouslySetInnerHTML={{ __html: movie.description }}
                                />
                            )}
                        </Link>
                    </div>
                    {Boolean(user?.email) && (
                        <div className="product-actions">
                            <button className="btn edit-btn" onClick={handleEdit} style={{ margin: '20px' }}>
                                Edit
                            </button>
                            <button className="btn delete-btn" onClick={handleDelete}>
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
