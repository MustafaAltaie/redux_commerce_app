import FullProductStructure from "./dashboard/dashboardComponents/FullProductStructure";
import '../style/productView.css';
import Header from './header/Header';
import { useParams, useNavigate } from "react-router-dom";
import { useReadProductQuery } from "../features/productApi";
import ProductRating from "./dashboard/dashboardComponents/ProductRating";
import { useState, useEffect } from "react";
import { handleAddToCart } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductView = () => {
    const [imageView, setImageView] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const { id } = useParams();
    const { data, error, isLoading } = useReadProductQuery();
    const currentCartContent = useSelector(state => state.cart.storageItems);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [id]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading product</p>;
    if (!data) return <p>No product data available</p>;
    const product = data.find(p => p._id === id);

    const handleAddCart = (product) => {
        if(!currentCartContent.some(item => item._id === product._id)){
            dispatch(handleAddToCart(product));
            navigate('/cart'); 
        } else {
            alert("This item is already in your cart.");
        }
    }

    const handleBuyItem = (product) => {
        if(!currentCartContent.some(item => item._id === product._id)){
            dispatch(handleAddToCart(product));
            navigate('/payment');
        } else {
            alert("This item is already in your cart.");
        }
    }

    return (
        <div>
            <Header />
            <div className="productViewWrapper">
                <div className="productViewImageGalleryWrapper">
                    {product.imageUrls.map((image, index) => (
                        <img src={image} key={index} onClick={() => setImageView(image)} />
                    ))}
                </div>
                <div className="productViewImageWrapper">
                    <img src={imageView || product.imageUrls[0]} />
                </div>
                <div className="productViewDetailsWrapper">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <h1>{product.title}</h1>
                        {product.specifications && <p style={{ fontWeight: 'normal', color: '#00000088', fontSize: '14px' }}>{product.specifications.slice(0, 40)}...</p>}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
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
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <h2>{product.discount ? Math.floor(product.price * (1 - product.discount / 100)) : product.price} kr</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                {product.discount && <p><span>Discount:</span> {product.discount}%</p>}
                                {product.discount && <p><span>Old price:</span> {product.price}%</p>} 
                            </div>
                        </div>
                    </div>
                    <div className="productViewElementsWrapper">
                        <h4>Product Details</h4>
                        <div>
                            <div>
                                {product.specifications && <p><span>Specifications: </span> {product.specifications}.</p>}
                                {product.color && <p><span>Color:</span> {product.color}.</p>}
                                {product.weight && <p><span>Weight:</span> {product.weight >= 1000 ? product.weight / 1000 + 'kg' : product.weight + 'g'}.</p>}
                            </div>
                        </div>
                    </div>
                    {product.fewLeft && product.availability && <p style={{ color: '#c00' }}>Only few left in stock</p>}
                    {!product.availability && <p style={{ color: 'red' }}>Out of stock</p>}
                    {product.shipment && <p><span>Product will be delevered in</span> {product.shipment} {product.shipment > 1 ? ' days' : ' day'}.</p>}
                    <div className="productButtonWrapper">
                    {product.availability &&
                    <button
                        onClick={e => {e.stopPropagation(); handleAddCart(product)}}>
                            <i className="fa-solid fa-cart-shopping"></i>
                            Add Cart
                    </button>}
                    <button
                        style={product.availability ? { background: '#B34BF8', color: 'white' } : {background: '#eee', color: 'black'}}
                        onClick={e => {e.stopPropagation(); handleBuyItem(product)}}>
                            <i className="fa-solid fa-bag-shopping"></i>
                            {product?.availability ? 'Buy' : 'Notify Me'}
                    </button>
                    </div>
                </div>
            </div>
            <div className="relatedProductsWrapper">
                <h3>Related Products</h3>
                {product.relatedProducts.map(relPr => (
                    <FullProductStructure
                    key={relPr}
                    productId={relPr}
                    setImageView={setImageView}
                    />
                ))}
            </div>
            <div className="descriptionContainer">
                <div className={isExpanded ? 'description-textExpanded' : 'description-textCollapsed'}>
                    {product.description && <p><span style={{ color: '#0a95aa', fontWeight: 'bold' }}>Product Description: </span> {product.description}</p>}
                </div>
                <button onClick={() => setIsExpanded(!isExpanded)} className="showMoreButton">{isExpanded ? 'Show Less' : 'Show More'}</button>
            </div>
        </div>
    )
}

export default ProductView;