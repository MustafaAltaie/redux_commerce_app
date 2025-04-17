import { useState, useRef, useEffect } from "react";
import RelatedProduct from "./RelatedProduct";
import ProductStructure from "./ProductStructure";
import '../../../style/form.css';

const Form = ({
  productData,
  handleCreateProduct,
  handlePrepareProduct,
  handleAddImage,
  handleDeleteImage,
  setShowForm,
  handleAddTags,
  handleDeleteTag,
  handleClearProduct,
  handleUpdateProduct,
  handleRelatedProducts,
  handleDeleteRelatedProduct
}) => {
  const [imageLink, setImageLink] = useState('');
  const [tag, setTag] = useState('');
  const [available, setAvailable] = useState(productData.availability);
  const [fewLeft, setFewLeft] = useState(productData.fewLeft);
  const [isArchived, setIsArchived] = useState(productData.isArchived || false);
  const tagInput = useRef();
  const imageInput = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [priceRange, setPriceRange] = useState(productData.discount || 1);
  const [productNewPrice, setProductNewPrice] = useState(Math.round(productData.price - (productData.price * (priceRange / 100))));
  const [priceDiscountCheck, setPriceDiscountCheck] = useState(productData.discount ? true : false);
  const sliderRef = useRef();

  let createPermit = true;

  const handleCreateUpdateProduct = async (state) => {
    const inputs = document.querySelectorAll('input');
    for(let i = 0; i < inputs.length; i++){
      if(inputs[i].placeholder.includes('*') && inputs[i].value === ''){
        inputs[i].style.border = 'solid 1px #f00';
        createPermit = false;
      } else {
        inputs[i].style.border = 'none';
      }
    }
    if(!createPermit) {
      alert('Fill all required fields');
    } else {
      state === 'create' ? await handleCreateProduct() : await handleUpdateProduct();
      setShowForm(false);
      handleClearProduct();
    }
    setSubmitting(false);
  }

  useEffect(() => {
    setProductNewPrice(Math.round(productData.price * (1 - priceRange / 100)));
    handlePrepareProduct({ target: { name: "discount", value: priceRange } });
  }, [priceRange]);

  useEffect(() => {
    handlePrepareProduct({ target: { name: 'discount', value: priceDiscountCheck ? priceRange : null } });
  }, [priceDiscountCheck]);

  return (
    <div className="productForm">
      <h1 className="closeFormButton" title="Close" onClick={() => {setShowForm(false); handleClearProduct()}}>+</h1>
      <input type="text" name="title" placeholder="Title*" value={productData.title || ''} onChange={handlePrepareProduct} />
      <textarea name="description" placeholder="Description" value={productData.description || ''} onChange={handlePrepareProduct} />
      <div className="priceFormWrapper" style={{ width: '100%' }}>
        <div>
          {productData.price &&
          <>
          <input type="checkbox" id="priceDiscountActivate" checked={priceDiscountCheck} onChange={e => setPriceDiscountCheck(e.target.checked)} />
          <label htmlFor="priceDiscountActivate">Original price: <span style={{ color: '#c00' }}>{productData.price} kr</span>, new price: <span style={{ color: 'green' }}>{productNewPrice} kr</span> after <span style={{ color: '#05c' }}>{priceRange}%</span> discount</label>
          </>}
        </div>
        <div>
          <input type="range" disabled={!priceDiscountCheck} className="priceRange" ref={sliderRef} min={1} max={99} value={priceRange} onChange={e => setPriceRange(e.target.value)} />
          <input type="number" name="price" placeholder="Price*" min={0} value={productData.price} onChange={handlePrepareProduct} />
        </div>
      </div>
      <div className="fewAvailabeWrapper">
        <div>
          <input
            type="checkbox"
            id="fewLeft"
            checked={fewLeft}
            onChange={e => {
              const newValue = e.target.checked;
              setFewLeft(newValue);
              handlePrepareProduct({ target: {name: 'fewLeft', value: newValue} })
            }}
          />
          <label htmlFor="fewLeft">Few Left</label>
        </div>
        <div>
          <input 
            type="checkbox" 
            id="availability"
            checked={available}
            onChange={e => {
              const newValue = e.target.checked;
              setAvailable(newValue);
              handlePrepareProduct({ target: { name: "availability", value: newValue } });
            }}
          />
          <label htmlFor="availability">In Stoke</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="isArchived"
            checked={isArchived}
            onChange={e => {
              const newValue = e.target.checked;
              setIsArchived(newValue);
              handlePrepareProduct({ target: {name: 'isArchived', value: newValue} })
            }}
          />
          <label htmlFor="isArchived">Archive</label>
        </div>
      </div>
      <input type="text" name="specifications" placeholder="specifications" value={productData.specifications || ''} onChange={handlePrepareProduct} />
      <div className="twoInputWrapper">
        <input type="text" name="color" placeholder="Color" value={productData.color || ''} onChange={handlePrepareProduct} />
        <input type="number" name="weight" placeholder="Weight in g" value={productData.weight || ''} onChange={handlePrepareProduct} />
        <input type="number" name="shipment" placeholder="Shipment" min={1} value={productData.shipment || ''} onChange={handlePrepareProduct} />
        <input type="text" name="brand" placeholder="Brand" value={productData.brand || ''} onChange={handlePrepareProduct} />
      </div>
      <div className="twoInputWrapper">
        <input type="text" name="category" placeholder="Category*" value={productData.category || ''} onChange={handlePrepareProduct} />
        <input type="number" name="rating" min={1} max={5} placeholder="Rating" value={productData.rating || ''} onChange={handlePrepareProduct} />
        <input type="number" name="numOfReviews" min={0} placeholder="Reviews" value={productData.numOfReviews || ''} onChange={handlePrepareProduct} />
      </div>
      <div className="btnTextDivWrapper">
        <div className="addImageWrapper">
        <h6 style={{ position: 'absolute', transform: 'translate(5px, -150%)', background: '#eedbc0' }}>Product Images</h6>
          {productData.imageUrls?.map(image => (
            <div key={image} onClick={() => handleDeleteImage(image)}>
              <img src={image} alt="image" />
            </div>
          ))}
        </div>
        <div>
          <input type="text" name="imageUrls" placeholder="Image Url" ref={imageInput} value={imageLink} onChange={e => setImageLink(e.target.value)} onKeyDown={e => {
            if(e.key === 'Enter'){
              handleAddImage(imageLink);
              imageInput.current.focus();
              setImageLink('');
            }}} />
          <button onClick={() => {handleAddImage(imageLink); setImageLink(''); imageInput.current.focus()}}>Add</button>
        </div>
      </div>
      <div className="btnTextDivWrapper">
        <div className="addTagWrapper">
        <h6 style={{ position: 'absolute', transform: 'translate(5px, -150%)', background: '#eedbc0' }}>Product Tags</h6>
          {productData.tags?.map(tag => (
            <p key={tag} onClick={() => handleDeleteTag(tag)}>{tag}</p>
          ))}
        </div>
        <div>
          <input type="text" name="tags" ref={tagInput} placeholder="Tag Name" value={tag} onChange={e => setTag(e.target.value)} onKeyDown={e => {
            if(e.key === "Enter"){
              handleAddTags(tag);
              setTag('');
              tagInput.current.focus();
            }}} />
          <button onClick={() => {handleAddTags(tag); setTag(''); tagInput.current.focus()}}>Add</button>
        </div>
      </div>
      <div className="relatedProductFormWrapper">
      <h6>Related Products</h6>
        <div className="relatedSelectedProductWrapper">
          {productData.relatedProducts.map((productId, index) => (
            <ProductStructure
              key={index}
              productId={productId}
              handleDeleteRelatedProduct={handleDeleteRelatedProduct}
            />
          ))}
        </div>
        <RelatedProduct
          handleRelatedProducts={handleRelatedProducts}
          productData={productData}
        />
      </div>
      <button onClick={async () => {
        setSubmitting(true);
        if (productData.id) {
          handleCreateUpdateProduct('update')
        } else {
          await handleCreateUpdateProduct('create');
        }
        }} disabled={submitting}>{productData.id ? 'Update Product' : 'Create Product'}
      </button>
    </div>
  )
}

export default Form;