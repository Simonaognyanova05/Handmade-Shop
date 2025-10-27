import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";
import { edit } from "../../services/edit";
import { getProductById } from "../../services/getProductById";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";


export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState({
        title: "",
        subtitle: "",
        description: "",
        img1: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOffer = async () => {
            try {
                const data = await getProductById(id);
                if (data) setProduct(data);
            } catch (err) {
                console.error("Error loading article:", err);
                alert("Failed to load information.");
            } finally {
                setLoading(false);
            }
        };
        fetchOffer();
    }, [id]);

    const handleInputChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleQuillChange = (value) => {
        setProduct({
            ...product,
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
            const result = await edit(id, product);
            alert("The article has been updated successfully!");
            navigate("/products");
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
                <h2>Edit article</h2>

                <form onSubmit={editHandler}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter article title"
                            value={product.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Subtitle</label>
                        <input
                            type="text"
                            name="subtitle"
                            placeholder="Enter article subtitle"
                            value={product.subtitle}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <ReactQuill
                            theme="snow"
                            value={product.description}
                            onChange={handleQuillChange}
                            modules={modules}
                            formats={formats}
                            placeholder="Enter article description..."
                            className="description-editor"
                        />
                    </div>

                    <div className="form-group">
                        <label>Image (URL)</label>
                        <input
                            type="text"
                            name="img1"
                            placeholder="Enter image link"
                            value={product.img1}
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