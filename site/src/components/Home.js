
export default function Home() {
    return (
        <>
            <div className="banner header-text">
                <div className="owl-banner owl-carousel">
                    <div className="banner-item-01">
                        <div className="text-content">
                            <h4>Best Offer</h4>
                            <h2>New Arrivals On Sale</h2>
                        </div>
                    </div>
                    <div className="banner-item-02">
                        <div className="text-content">
                            <h4>Flash Deals</h4>
                            <h2>Get your best products</h2>
                        </div>
                    </div>
                    <div className="banner-item-03">
                        <div className="text-content">
                            <h4>Last Minute</h4>
                            <h2>Grab last minute deals</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="latest-products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Latest Products</h2>
                                <a href="products.html">view all products <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-item">
                                <a href="#"><img src="assets/images/product_01.jpg" alt="" /></a>
                                <div className="down-content">
                                    <a href="#">
                                        <h4>Tittle goes here</h4>
                                    </a>
                                    <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-item">
                                <a href="#"><img src="assets/images/product_01.jpg" alt="" /></a>
                                <div className="down-content">
                                    <a href="#">
                                        <h4>Tittle goes here</h4>
                                    </a>
                                    <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-item">
                                <a href="#"><img src="assets/images/product_01.jpg" alt="" /></a>
                                <div className="down-content">
                                    <a href="#">
                                        <h4>Tittle goes here</h4>
                                    </a>
                                    <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="happy-clients">
                <div className="container">
                    <div className="section-heading">
                        <h2>What Our Clients Say</h2>
                    </div>

                    <div className="testimonials-grid">
                        <div className="testimonial-item">
                            <p>"Работата с вашия екип беше удоволствие — всичко беше перфектно изпълнено!"</p>
                            <h4>- Мария Иванова</h4>
                        </div>

                        <div className="testimonial-item">
                            <p>"Професионализъм, точност и отлично обслужване. Препоръчвам горещо!"</p>
                            <h4>- Георги Петров</h4>
                        </div>

                        <div className="testimonial-item">
                            <p>"Щастливи сме да сме част от вашата партньорска мрежа. Отлична комуникация!"</p>
                            <h4>- Елена Стоянова</h4>
                        </div>

                        <div className="testimonial-item">
                            <p>"Много отзивчив екип и качествено обслужване. Ще работим отново с вас!"</p>
                            <h4>- Николай Георгиев</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="send-message">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Send us a Comment</h2>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="contact-form">
                                <form id="contact" action="" method="post">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Cooment"
                                                    required=""></textarea>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="filled-button">Send Comment</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}