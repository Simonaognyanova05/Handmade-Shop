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

                <div className="price">
                    29.99 лв <span>(€15.33)</span>
                </div>

                <p className="description">
                    Първокласен, персонализиран колаж, който разказва вашата уникална история –
                    незабравим спомен, който ще донесе уют във вашия дом, за да пазите най-значимите моменти.
                </p>


                <div className="option">
                    <h3>Размер</h3>
                    <div className="sizes">
                        <button>21x30 см</button>
                        <button>31x40 см</button>
                    </div>
                </div>


                <div className="option">
                    <label>Добавете информация за вашия колаж (ако е необходимо):</label>
                    <textarea placeholder="Дата, текст, номера, имена..."></textarea>
                </div>

                <button className="upload-btn">📷 Изберете снимки</button>
                <button className="cart-btn">🛒 ДОБАВИ В КОЛИЧКАТА</button>
            </div>
        </main>

    );
}
