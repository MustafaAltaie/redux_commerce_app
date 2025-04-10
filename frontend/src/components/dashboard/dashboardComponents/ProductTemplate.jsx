import ProductRating from "./ProductRating";
import { useNavigate } from "react-router-dom";
import { handleAddToCart } from "../../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductTemplate = ({ product, productId, setImageView }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentCartContent = useSelector(state => state.cart.storageItems);

    const handleSelectProduct = (product) => {
        navigate(`/product/${product._id}`);
    }

    const handleAddCart = (product) => {
        if(!currentCartContent.some(item => item._id === product._id)){
            dispatch(handleAddToCart(product));
            navigate('/cart'); 
        } else {
            alert("This item is already in your cart.");
        }
    }

    return (
        <div className="productWrapper" key={productId} onClick={() => {handleSelectProduct(product), setImageView('')}}>
            {product?.fewLeft && product?.availability && <h6 className="fewLeftWrapper">Few Left In Stock</h6>}
                {product.discount &&
            <h6 className='percentageDiscount'>{product.discount}% OFF</h6>}
            <div className="productImageWrapper">
                <img src={product?.imageUrls[0]} />
            </div>
            <h3>{product?.title}</h3>
            <p style={{ color: '#888' }}>{product?.description.slice(0, 50)}</p>
            <div className="priceDiscountWrapper">
            <h4>{product.discount ? Math.floor(product.price * (1 - product.discount / 100)) : product.price} kr</h4>
                {product.discount &&
                <div>
                    <h5 style={{ color: '#4a4', marginBottom: '5px' }}>Save {product.price - Math.floor(product.price * (1 - product.discount / 100))} kr</h5>
                    <h5 style={{ color: '#B34BF8' }}>Old Price: <span className="oldPrice">{product.price} kr</span></h5>
                </div>}
            </div>
            <div className='productAppRatingWrapper'>
                <p>{product.rating || 0}</p>
                <ProductRating rating={product.rating} />
                {product.numOfReviews ?
                <p>({
                    product.numOfReviews > 1000000 ? (product.numOfReviews / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
                    : product.numOfReviews > 1000 ? (product.numOfReviews / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
                    : product.numOfReviews})
                </p>
                : <p>(0)</p>}
            </div>
            <div className="shipmentAvailabilityWrapper">
                <h6 style={{ color: product?.availability ? '#0a0' : 'red' }}>{product?.availability ? 'In Stock' : 'Out of Stock'}</h6>
                {product?.shipment && <h6>Delevery in {product?.shipment} {product?.shipment > 1 ? 'work days' : 'day'} </h6>}
            </div>
            <div className="productButtonWrapper">
                {product.availability &&
                <button onClick={e => {e.stopPropagation(); handleAddCart(product)}}><i className="fa-solid fa-cart-shopping"></i>Add Cart</button>}
                <button style={product.availability ? { background: '#B34BF8', color: 'white' } : {background: '#eee', color: 'black'}} onClick={e => e.stopPropagation()}><i className="fa-solid fa-bag-shopping"></i>{product?.availability ? 'Buy' : 'Notify Me'}</button>
            </div>
        </div>
    )
}

export default ProductTemplate;