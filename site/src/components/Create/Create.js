import { useState } from "react";
import "./Create.css";
import { createProduct } from "../../services/createProduct";

export default function CreateProduct() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priceLv, setPriceLv] = useState("");
    const [priceEuro, setPriceEuro] = useState("");
    const [sizes, setSizes] = useState([""]); // започваме с едно поле за размер
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");
    const [img4, setImg4] = useState("");
    const [img5, setImg5] = useState("");

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

        if (!title || !priceLv) {
            setError("Моля, попълнете всички задължителни полета!");
            return;
        }

        const product = {
            title,
            description: description,
            priceLv: priceLv,
            priceEuro: priceEuro,
            sizes: sizes.filter(s => s.trim() !== ""),
            img1,
            img2,
            img3,
            img4,
            img5,

        };

        try {
            const created = await createProduct(product);
            console.log("Създаден продукт:", created);
            setSuccess("Продуктът е създаден успешно!");
            setTitle("");
            setPriceLv("");
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
                        <label>Описание</label>
                        <input
                            type="text"
                            placeholder="Въведете описание на продукта"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Цена в лв.</label>
                        <input
                            type="number"
                            placeholder="Въведете цена"
                            value={priceLv}
                            onChange={(e) => setPriceLv(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Цена в евро</label>
                        <input
                            type="number"
                            placeholder="Въведете цена"
                            value={priceEuro}
                            onChange={(e) => setPriceEuro(e.target.value)}
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
                    <div className="form-group">
                        <label>Снимка 1</label>
                        <input
                            type="text"
                            placeholder="Линк към снимка 1"
                            value={img1}
                            onChange={(e) => setImg1(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Снимка 2</label>
                        <input
                            type="text"
                            placeholder="Линк към снимка"
                            value={img2}
                            onChange={(e) => setImg2(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Снимка 3</label>
                        <input
                            type="text"
                            placeholder="Линк към снимка"
                            value={img3}
                            onChange={(e) => setImg3(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Снимка 4</label>
                        <input
                            type="text"
                            placeholder="Линк към снимка"
                            value={img4}
                            onChange={(e) => setImg4(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Снимка 5</label>
                        <input
                            type="text"
                            placeholder="Линк към снимка"
                            value={img5}
                            onChange={(e) => setImg5(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">Създай продукт</button>
                </form>
            </div>
        </div>
    );
}
