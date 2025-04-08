import { useReadProductQuery } from "../../../features/productApi";

const ProductStructure = ({ productId, handleDeleteRelatedProduct }) => {

  const { data, isLoading, error } = useReadProductQuery();

  if(isLoading) return <p>Loading ...</p>
  if(error) return <p>Error loading contend</p>

  const selectedProduct = data?.find(p => p._id === productId);

  return (
    <div className="relatedSelectedProduct" key={productId} onClick={() => handleDeleteRelatedProduct(productId)}>
        <div className="relatedSelectedProductImageWrapper">
            <img src={selectedProduct?.imageUrls[0]} />
        </div>
        <p>{selectedProduct?.title}</p>
        <p style={{ color: '#888', marginTop: '5px' }}>{selectedProduct?.description.slice(0, 50)}</p>
    </div>
  )
}

export default ProductStructure;