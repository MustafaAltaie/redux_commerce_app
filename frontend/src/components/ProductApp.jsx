import '../ProductApp.css';
import { useReadProductQuery } from "../features/productApi";
import ProductTemplate from './dashboard/dashboardComponents/ProductTemplate';

function App() {
  const { data, error, isLoading } = useReadProductQuery();
  if(error) return <p>Error reading data from db</p>
  if(isLoading) return <p>Loading...</p>

  return (
    <div className="userProductWrapper">
      {data.map(product => ( !product.isArchived &&
        <ProductTemplate
          product={product}
        />
      ))}
    </div>
  )
}

export default App;