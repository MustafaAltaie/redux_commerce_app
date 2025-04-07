import FullProductStructure from "./dashboard/dashboardComponents/FullProductStructure";
import '../style/productView.css';

const ProductView = () => {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));

    if(!product) return <p>No product found!</p>

    return (
        <div>
            <div className="productViewWrapper">
                <div className="productViewImageGalleryWrapper">
                    {product.imageUrls.map((image, index) => (
                        <img src={image} key={index} />
                    ))}
                </div>
                <div className="productViewImageWrapper">
                    <img src={product.imageUrls[0]} />
                </div>
                <div className="productViewDetailsWrapper">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <h2>{product.price} kr</h2>
                    <p>{product.discount}</p>
                    <p>{product.fewLeft}</p>
                    <p>{product.availability}</p>
                    <p>{product.specifications}</p>
                    <p>{product.color}</p>
                    <h1>{product.weight}</h1>
                    <p>{product.shipment}</p>
                    <div className="productButtonWrapper">
                        <button><i className="fa-solid fa-cart-shopping"></i>Add Cart</button>
                        <button><i className="fa-solid fa-bag-shopping"></i>Buy</button>
                    </div>
                </div>
            </div>
            <div className="relatedProductsWrapper">
                <h1>Related Products</h1>
                {product.relatedProducts.map(relPr => (
                    <FullProductStructure
                    key={relPr}
                    productId={relPr}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductView;