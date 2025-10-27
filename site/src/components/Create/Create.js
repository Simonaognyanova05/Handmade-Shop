import { useState } from "react";
import "./Create.css";
import { createProduct } from "../../services/createProduct";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";


export default function CreateProduct() {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");
    const [img1, setImg1] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!title || !description) {
            setError("Please fill in all required fields!");
            return;
        }

        const product = {
            title,
            subtitle,
            description, // 🧠 HTML съдържанието от редактора
            img1,
        };

        try {
            const created = await createProduct(product);
            console.log("Created article:", created);
            setSuccess("The article was created successfully!");
            setTitle("");
            setSubtitle("");
            setDescription("");
            setImg1("");
        } catch (err) {
            setError(err.message);
        }
    };

    // 🧰 Настройки на тулбара
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

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Create a new article</h2>
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}

                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            placeholder="Enter article title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Subtitle</label>
                        <input
                            type="text"
                            placeholder="Enter article subtitle"
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <ReactQuill
                            theme="snow"
                            value={description}
                            onChange={setDescription}
                            modules={modules}
                            formats={formats}
                            placeholder="Enter article description..."
                            className="description-editor"
                        />
                    </div>

                    <div className="form-group">
                        <label>Image</label>
                        <input
                            type="text"
                            placeholder="Enter image link"
                            value={img1}
                            onChange={(e) => setImg1(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">Create</button>
                </form>
            </div>
        </div>
    );
}
