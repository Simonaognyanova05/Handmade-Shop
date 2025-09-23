import "./Details.css";

export default function Details() {
    return (

        <main className="details-page">
            {/* Галерия */}
            <div className="product-gallery">
                <img
                    src="https://i.imgur.com/6c2xsF8.png"
                    alt="Колаж За Мама"
                    className="main-image"
                />
                <div className="thumbnails">
                    <img src="https://i.imgur.com/6c2xsF8.png" alt="thumb 1" />
                    <img src="https://i.imgur.com/6c2xsF8.png" alt="thumb 2" />
                    <img src="https://i.imgur.com/KNoMG79.png" alt="thumb 3" />
                    <img src="https://i.imgur.com/6c2xsF8.png" alt="thumb 4" />
                </div>
            </div>

            {/* Инфо */}
            <div className="product-info">
                <h1>Колаж "За Мама"</h1>

                <div className="rating">
                    <span className="stars">★★★★☆</span>
                    <span className="reviews">4.7 | 248 ревюта</span>
                </div>

                <div className="price">
                    29.99 лв <span>(€15.33)</span>
                </div>

                <p className="description">
                    Първокласен, персонализиран колаж, който разказва вашата уникална история –
                    незабравим спомен, който ще донесе уют във вашия дом, за да пазите най-значимите моменти.
                </p>

                <div className="option">
                    <h3>Цвят на рамката</h3>
                    <div className="colors">
                        <span className="color black"></span>
                        <span className="color white"></span>
                        <span className="color beige"></span>
                    </div>
                </div>

                <div className="option">
                    <h3>Размер</h3>
                    <div className="sizes">
                        <button>21x30 см</button>
                        <button>31x40 см</button>
                    </div>
                </div>

                <div className="option">
                    <h3>Добавки</h3>
                    <ul className="addons">
                        <li><span>Добави картичка</span><span>5.49 лв (€2.81)</span></li>
                        <li><span>Подаръчна кутия</span><span>5.99 лв (€3.06)</span></li>
                        <li><span>Сребърно колие „Обичам те“</span><span>44.99 лв (€23.00)</span></li>
                    </ul>
                </div>

                <div className="option">
                    <label>Добавете информация за вашия колаж:</label>
                    <textarea placeholder="Дата, текст, номера, имена..."></textarea>
                </div>

                <button className="upload-btn">📷 Изберете снимки</button>
                <button className="cart-btn">🛒 ДОБАВИ В КОЛИЧКАТА</button>
            </div>
        </main>

    );
}
