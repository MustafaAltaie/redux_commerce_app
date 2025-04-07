import { useReadProductQuery } from "../../../features/productApi";

const FullProductStructure = ({ productId }) => {
    const { data, isLoading, error} = useReadProductQuery();

    const relatedProduct = data?.find(p => p._id === productId);

    const handleSelectProduct = (product) => {
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        navigate('/product');
    }

    return (
        <div className="productWrapper" key={productId} onClick={() => handleSelectProduct(relatedProduct)}>
            {relatedProduct?.fewLeft && relatedProduct?.availability && <h6 className="fewLeftWrapper">Few Left In Stock</h6>}
            <div className="productImageWrapper">
                <img src={relatedProduct?.imageUrls[0]} />
            </div>
            <h3>{relatedProduct?.title}</h3>
            <p style={{ color: '#888' }}>{relatedProduct?.description.slice(0, 50)}</p>
            <div className="priceDiscountWrapper">
                <h4>{relatedProduct?.price} kr</h4>
                {relatedProduct?.discount &&
                <div>
                    <h5 style={{ color: '#4a4', marginBottom: '5px' }}>Save {relatedProduct?.discount} kr</h5>
                    <h5 style={{ color: '#B34BF8' }}>Old Price: <span className="oldPrice">{relatedProduct?.price + relatedProduct?.discount} kr</span></h5>
                </div>}
            </div>
            <div className="shipmentAvailabilityWrapper">
                <h6 style={{ color: relatedProduct?.availability ? '#0a0' : 'red' }}>{relatedProduct?.availability ? 'In Stock ✅' : 'Out of Stock ❌'}</h6>
                {relatedProduct?.shipment && <h6>Delevery in {relatedProduct?.shipment} {relatedProduct?.shipment > 1 ? 'work days' : 'day'} </h6>}
            </div>
            <div className="productButtonWrapper">
                <button onClick={e => e.stopPropagation()}><i className="fa-solid fa-cart-shopping"></i>Add Cart</button>
                <button style={relatedProduct?.availability ? { background: '#B34BF8', color: 'white' } : {background: '#eee', color: 'black'}} onClick={e => e.stopPropagation()}><i className="fa-solid fa-bag-shopping"></i>{relatedProduct?.availability ? 'Buy' : 'Notify Me'}</button>
            </div>
        </div>
    )
}

export default FullProductStructure;