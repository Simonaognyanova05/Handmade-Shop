import { useState } from "react";
import "./Create.css";
import { createProduct } from "../../services/createProduct";

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
            setError("Моля, попълнете всички задължителни полета!");
            return;
        }

        const product = {
            title,
            subtitle,
            description,
            img1,

        };

        try {
            const created = await createProduct(product);
            console.log("Създаден продукт:", created);
            setSuccess("Продуктът е създаден успешно!");
            setTitle("");
            setSubtitle("");
            setDescription([""]);
            setImg1([""]);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Създаване на продукт</h2>
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}

                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Заглавие</label>
                        <input
                            type="text"
                            placeholder="Въведете заглавие на статията"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Подзаглавие</label>
                        <input
                            type="text"
                            placeholder="Въведете подзаглавие на статията"
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Описание</label>
                        <input
                            type="text"
                            placeholder="Въведете същността на статията"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                       <div className="form-group">
                        <label>Снимка</label>
                        <input
                            type="text"
                            placeholder="Въведете линк към снимка"
                            value={img1}
                            onChange={(e) => setImg1(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">Създай продукт</button>
                </form>
            </div>
        </div>
    );
}
