import '../ProductApp.css';
import { useReadProductQuery } from "../features/productApi";
import { useNavigate } from 'react-router-dom';

function App() {
  const { data, error, isLoading } = useReadProductQuery();
  const navigate = useNavigate();

  if(error) return <p>Error reading data from db</p>
  if(isLoading) return <p>Loading...</p>

  const handleSelectProduct = (product) => {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    navigate('/product');
  }

  return (
    <div className="userProductWrapper">
      {data.map(product => ( !product.isArchived &&
        <div className="productWrapper" key={product._id} onClick={() => handleSelectProduct(product)}>
          {product.fewLeft && product.availability && <h6 className="fewLeftWrapper">Few Left In Stock</h6>}
          {product.discount &&
          <h6 className='percentageDiscount'>{product.discount}% OFF</h6>}
          <div className="productImageWrapper">
              <img src={product.imageUrls[0]} />
          </div>
          <h3>{product.title}</h3>
          <p style={{ color: '#888' }}>{product.description.slice(0, 50)}</p>
          <div className="priceDiscountWrapper">
            <h4>{product.discount ? Math.floor(product.price * (1 - product.discount / 100)) : product.price} kr</h4>
            {product.discount &&
            <div>
              <h5 style={{ color: '#4a4', marginBottom: '5px' }}>Save {product.price - Math.floor(product.price * (1 - product.discount / 100))} kr</h5>
              <h5 style={{ color: '#B34BF8' }}>Old Price: <span className="oldPrice">{product.price} kr</span></h5>
            </div>}
          </div>
          <div className="shipmentAvailabilityWrapper">
            <h6 style={{ color: product.availability ? '#0a0' : 'red' }}>{product.availability ? 'In Stock' : 'Out of Stock'}</h6>
            {product.shipment && <h6>Delevery in {product.shipment} {product.shipment > 1 ? 'work days' : 'day'} </h6>}
          </div>
          <div className="productButtonWrapper">
            <button onClick={e => e.stopPropagation()}><i className="fa-solid fa-cart-shopping"></i>Add Cart</button>
            <button style={product.availability ? { background: '#B34BF8', color: 'white' } : {background: '#eee', color: 'black'}} onClick={e => e.stopPropagation()}><i className="fa-solid fa-bag-shopping"></i>{product.availability ? 'Buy' : 'Notify Me'}</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App;