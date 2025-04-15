import { useCreateProductMutation, useReadProductQuery, useUpdateProductMutation, useDeleteProductMutation, useArchiveProductMutation } from "../../features/productApi";
import { useState } from "react";
import Form from "./dashboardComponents/Form";
import ProductCard from "./dashboardComponents/ProductCard";
import Header from "../header/Header";

const Dashboard = () => {
  const [createProduct] = useCreateProductMutation();
  const { data, error, isLoading } = useReadProductQuery();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [archiveProduct] = useArchiveProductMutation();

  const [showForm, setShowForm] = useState(false);

  const [productData, setProductData] = useState({
    id: '',
    title: '',
    description: '',
    discount: '',
    price: '',
    category: '',
    brand: '',
    shipment: '',
    fewLeft: false,
    availability: true,
    isArchived: false,
    imageUrls: [],
    specifications: '',
    promo_code: '',
    color: '',
    weight: '',
    rating: '',
    numOfReviews: '',
    tags: [],
    relatedProducts: []
  });

  const handleClearProduct = () => {
    setProductData({
      id: '',
      title: '',
      description: '',
      discount: '',
      price: '',
      category: '',
      brand: '',
      shipment: '',
      fewLeft: false,
      availability: true,
      isArchived: false,
      imageUrls: [],
      specifications: '',
      promo_code: '',
      color: '',
      weight: '',
      rating: '',
      numOfReviews: '',
      tags: [],
      relatedProducts: []
    });
  }

  // Read Products
  if(error) return <p>Error reading data from db</p>
  if(isLoading) return <p>Loading...</p>

  // Create Product
  const handleCreateProduct = async () => {
    try {
      await createProduct(productData);
    } catch (err) {
      console.log('Error creating product', err);
    }
  }

  // Update Product
  const handleUpdateProduct = async () =>{
    try {
      await updateProduct({ id: productData.id, ...productData });
    } catch (err) {
      console.log('Error updating the product', err);
    }
  }

  // Delete Product
  const handleDeleteProduct = async (id) => {
    try {
      if (window.confirm('Sure you want to delete product?')) {
        const res = await deleteProduct(id);

        if (res.error) {
          console.error('Error deleting product:', res.error);
          alert('Failed to delete product');
        } else {
          console.log(res.data?.message || 'Successfully deleted product');
        }
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('Something went wrong');
    }
  }

  const handleArchiveProduct = async (id, archiveState) => {
    try {
      await archiveProduct({ id, isArchived: !archiveState });
    } catch (err) {
      console.log('Error updating archive', err);
    }
  }

  const handlePrepareProduct = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  }

  const handleAddImage = (link) => {
    if(productData.imageUrls.includes(link)){
      return alert('Image already exist');
    }
    setProductData(prev => ({
      ...prev, imageUrls: [...prev.imageUrls, link]
    }));
  }

  const handleDeleteImage = (link) => {
    if(window.confirm('Confirm deleting image?')){
      setProductData(prev => ({
        ...prev, imageUrls: prev.imageUrls.filter(image => image != link)
      }));
    }
  }

  const handleAddTags = (tag) => {
    if(!tag.trim()) return;
    if(productData.tags.includes(tag)){
      return alert('Tag has already been added');
    }
    setProductData(prev => ({
      ...prev, tags: [...prev.tags, tag]
    }));
  }

  const handleDeleteTag = (tag) => {
    if(window.confirm(`Confirm deleting ${tag}?`)){
      setProductData(prev => ({
        ...prev, tags: prev.tags.filter(t => t != tag)
      }));
    }
  }

  const handleRelatedProducts = (productId) => {
    setProductData(prev => ({
      ...prev, relatedProducts: [...prev.relatedProducts, productId]
    }));
  }

  const handleDeleteRelatedProduct = (productId) => {
    setProductData(prev => ({
      ...prev, relatedProducts: prev.relatedProducts.filter(p => p !== productId)
    }));
  }

  return (
    <>
    <Header />
    <div className="dashboardProductWrapper">
      {!showForm &&
      <h1 className="showFormButton" title='Add Product' onClick={() => setShowForm(!showForm)}>+</h1>}
      {showForm &&
      <Form
      productData={productData}
      handleCreateProduct={handleCreateProduct}
      handlePrepareProduct={handlePrepareProduct}
      handleAddImage={handleAddImage}
      handleDeleteImage={handleDeleteImage}
      setShowForm={setShowForm}
      handleAddTags={handleAddTags}
      handleDeleteTag={handleDeleteTag}
      handleClearProduct={handleClearProduct}
      handleUpdateProduct={handleUpdateProduct}
      handleRelatedProducts={handleRelatedProducts}
      handleDeleteRelatedProduct={handleDeleteRelatedProduct}
      />}
      {data.map(product => (
      <ProductCard
      key={product._id}
      product={product}
      handleDeleteProduct={handleDeleteProduct}
      setProductData={setProductData}
      setShowForm={setShowForm}
      handleArchiveProduct={handleArchiveProduct}
      />
      ))}
    </div>
    </>
  )
}

export default Dashboard;