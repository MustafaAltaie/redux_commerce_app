import { useSelector } from 'react-redux';
import '../ProductApp.css';
import { useReadProductQuery } from "../features/productApi";
import ProductTemplate from './dashboard/dashboardComponents/ProductTemplate';
import Footer from './Footer';

function App() {
  const { data, error, isLoading } = useReadProductQuery();
  const showBrand = useSelector(state => state.cart.showBrand);
  if(error) return <p>Error reading data from db</p>
  if(isLoading) return <p>Loading...</p>

  return (
    <>
    <div className="userProductWrapper">
      {data.map(product => ( !product.isArchived && (product.brand === showBrand || showBrand === '') &&
        <ProductTemplate
          key={product._id}
          product={product}
        />
      ))}
    </div>
    <Footer />
    </>
  )
}

export default App;