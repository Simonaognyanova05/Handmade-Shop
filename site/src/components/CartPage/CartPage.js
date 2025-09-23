import "./CartPage.css";

export default function CartPage() {
    return (
        <>
            <main className="cart-page">
                <h1>Вашата количка</h1>

                <div className="cart-container">
                    {/* Лява част – продукти */}
                    <div className="cart-items">
                        <div className="cart-item">
                            <img src="assets/images/product_01.jpg" alt="product" />
                            <div className="item-info">
                                <h3>Колаж "За Мама"</h3>
                                <p>Размер: 31x40 см</p>
                                <p>Цвят: Бял</p>
                                <div className="quantity">
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                            </div>
                            <div className="item-price">29.99 лв</div>
                        </div>

                        <div className="cart-item">
                            <img src="assets/images/product_02.jpg" alt="product" />
                            <div className="item-info">
                                <h3>Подаръчна кутия</h3>
                                <p>Цвят: Червен</p>
                                <div className="quantity">
                                    <button>-</button>
                                    <span>2</span>
                                    <button>+</button>
                                </div>
                            </div>
                            <div className="item-price">11.98 лв</div>
                        </div>
                    </div>

                    {/* Дясна част – обобщение */}
                    <div className="cart-summary">
                        <h2>Обобщение</h2>
                        <div className="summary-row">
                            <span>Междинна сума:</span>
                            <span>41.97 лв</span>
                        </div>
                        <div className="summary-row">
                            <span>Доставка:</span>
                            <span>4.99 лв</span>
                        </div>
                        <div className="summary-row total">
                            <span>Общо:</span>
                            <span>46.96 лв</span>
                        </div>
                        <button className="checkout-btn">Продължи към плащане</button>
                    </div>
                </div>
            </main>

        </>
    );
}
