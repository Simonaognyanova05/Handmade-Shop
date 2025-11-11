import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditMovie.css";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { getMovieById } from "../../services/getMovieById";
import { editMovie } from "../../services/editMovie";


export default function EditMovie() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [movie, setMovie] = useState({
        title: "",
        subtitle: "",
        description: "",
        img1: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOffer = async () => {
            try {
                const data = await getMovieById(id);
                if (data) setMovie(data);
            } catch (err) {
                console.error("Error loading movie:", err);
                alert("Failed to load information.");
            } finally {
                setLoading(false);
            }
        };
        fetchOffer();
    }, [id]);

    const handleInputChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value,
        });
    };

    const handleQuillChange = (value) => {
        setMovie({
            ...movie,
            description: value,
        });
    };
    const modules = {
        toolbar: [
            [{ font: [] }, { size: [] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            [{ align: [] }],
            ["blockquote", "code-block"],
            ["link", "image"],
            ["clean"]
        ],
    };

    const formats = [
        "font", "size",
        "bold", "italic", "underline", "strike",
        "color", "background",
        "script", "super", "sub",
        "align",
        "blockquote", "code-block",
        "link", "image",
    ];


    const editHandler = async (e) => {
        e.preventDefault();
        try {
            const result = await editMovie(id, movie);
            alert("The movie has been updated successfully!");
            navigate("/movies");
        } catch (err) {
            console.error(err);
            alert("An error occured while saving.");
        }
    };

    if (loading) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Edit Movie</h2>

                <form onSubmit={editHandler}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter movie title"
                            value={movie.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Ganre</label>
                        <input
                            type="text"
                            name="ganre"
                            placeholder="Enter movie ganre"
                            value={movie.ganre}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <ReactQuill
                            theme="snow"
                            value={movie.description}
                            onChange={handleQuillChange}
                            modules={modules}
                            formats={formats}
                            placeholder="Enter movie description..."
                            className="description-editor"
                        />
                    </div>

                    <div className="form-group">
                        <label>Image (URL)</label>
                        <input
                            type="text"
                            name="img1"
                            placeholder="Enter image link"
                            value={movie.img1}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        💾 Save changes
                    </button>
                </form>
            </div>
        </div>
    );
}