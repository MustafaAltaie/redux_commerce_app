
const ProductSettingsMenu = ({
  setShowProductSettingsMenu,
  handleDeleteProduct,
  productId,
  setProductData,
  setShowForm,
  product,
  handleArchiveProduct
}) => {
  return (
    <div className="productSettingsMenu">
        <p onClick={() => {setProductData({
          id: productId,
          title: product.title,
          description: product.description,
          discount: product.discount,
          price: product.price,
          category: product.category,
          shipment: product.shipment,
          fewLeft: product.fewLeft,
          availability: product.availability,
          isArchived: product.isArchived,
          imageUrls: product.imageUrls,
          specifications: product.specifications,
          promo_code: product.promo_code,
          color: product.color,
          weight: product.weight,
          rating: product.rating,
          tags: product.tags,
          relatedProducts: product.relatedProducts
          }); setShowForm(true); setShowProductSettingsMenu(false)}}><i className="fa-solid fa-pen"></i> Update Product</p>
        <p onClick={() => handleDeleteProduct(productId)}><i className="fa-solid fa-trash"></i> Delete Product</p>
        <p onClick={() => {handleArchiveProduct(productId, product.isArchived); setShowProductSettingsMenu(false)}} style={{ color: product.isArchived && 'green' }}>
          {product.isArchived ? <i className="fa-solid fa-folder-open" style={{ color: 'green' }}></i> : <i className="fa-solid fa-box-archive"></i>}
          {product.isArchived ? ' Unarchive Product' : ' Archive Product'}
        </p>
        <p onClick={() => setShowProductSettingsMenu(false)}><i className="fa-solid fa-circle-xmark" style={{ color: 'red' }}></i> Close Menu</p>
    </div>
  )
}

export default ProductSettingsMenu;