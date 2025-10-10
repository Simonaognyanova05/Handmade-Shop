import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";
import {edit} from '../../services/edit';
import {getProductById} from '../../services/getProductById';


export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setRoom] = useState({
        title: "",
        subtitle: "",
        description: "",
        img1: "",
    });

    const [loading, setLoading] = useState(true);

    // 🟡 Зареждаме старата информация
    useEffect(() => {
        const fetchOffer = async () => {
            try {
                const data = await getProductById(id);
                if (data) setRoom(data);
            } catch (err) {
                console.error("Грешка при зареждане на офертата:", err);
                alert("Неуспешно зареждане на информацията.");
            } finally {
                setLoading(false);
            }
        };
        fetchOffer();
    }, [id]);

    const handleChange = (e) => {
        setRoom({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    // 🟢 Запазване на промените
    const editHandler = async (e) => {
        e.preventDefault();
        try {
            const result = await edit(id, product);
            alert("Офертата е обновена успешно!");
            navigate("/products");
        } catch (err) {
            console.error(err);
            alert("Възникна грешка при запазването.");
        }
    };

    if (loading) {
        return <p className="text-center mt-10">Зареждане...</p>;
    }

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Редактиране на оферта</h2>

                <form onSubmit={editHandler}>
                    <div className="form-group">
                        <label>Заглавие</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Въведете заглавие на офертата"
                            value={product.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Подзаглавие</label>
                        <input
                            type="text"
                            name="subtitle"
                            placeholder="Въведете подзаглавие"
                            value={product.subtitle}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Описание</label>
                        <textarea
                            name="description"
                            placeholder="Въведете описание"
                            value={product.description}
                            onChange={handleChange}
                            rows="5"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Снимка (URL)</label>
                        <input
                            type="text"
                            name="img1"
                            placeholder="Въведете линк към снимка"
                            value={product.img1}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        💾 Запази промените
                    </button>
                </form>
            </div>
        </div>
    );
}
