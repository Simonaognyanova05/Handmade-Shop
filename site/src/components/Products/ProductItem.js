export default function ProductItem({ product }) {
    return (
        <div className="col-lg-4 col-md-4 all des">
            <div className="product-item">
                <a href="#"><img src={product.img1} alt={product.title} /></a>
                <div className="down-content">
                    <a href="#"><h4>{product.title}</h4></a>
                    <h6>{product.priceLv} лв./{product.priceEuro}E</h6>
                    {product.sizes && product.sizes.length > 0 && (
                        <p>Размери: {product.sizes.join(", ")}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
