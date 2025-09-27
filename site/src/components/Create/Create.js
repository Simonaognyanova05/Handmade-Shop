import { useState } from "react";
import "./Create.css";
import { createProduct } from "../../services/createProduct";

export default function CreateProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [sizes, setSizes] = useState([""]); // започваме с едно поле за размер
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const addSizeField = () => {
        setSizes([...sizes, ""]);
    };

    const handleSizeChange = (index, value) => {
        const newSizes = [...sizes];
        newSizes[index] = value;
        setSizes(newSizes);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!title || !price) {
            setError("Моля, попълнете всички задължителни полета!");
            return;
        }

        const product = {
            title,
            price,
            sizes: sizes.filter(s => s.trim() !== "")
        };

        try {
            const created = await createProduct(product);
            console.log("Създаден продукт:", created);
            setSuccess("Продуктът е създаден успешно!");
            setTitle("");
            setPrice("");
            setSizes([""]);
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
                            placeholder="Въведете име на продукта"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Цена в лв.</label>
                        <input
                            type="number"
                            placeholder="Въведете цена"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Размери</label>
                        {sizes.map((size, index) => (
                            <input
                                key={index}
                                type="text"
                                placeholder="Пример: 21x30 см"
                                value={size}
                                onChange={(e) => handleSizeChange(index, e.target.value)}
                            />
                        ))}
                        <button type="button" onClick={addSizeField} className="login-btn">
                            Добави размер
                        </button>
                    </div>

                    <button type="submit" className="login-btn">Създай продукт</button>
                </form>
            </div>
        </div>
    );
}
