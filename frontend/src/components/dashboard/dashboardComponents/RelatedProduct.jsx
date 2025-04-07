import { useState } from "react";
import { useReadProductQuery } from "../../../features/productApi";

const RelatedProduct = ({ handleRelatedProducts, productData }) => {
    const { data, isLoading, error } = useReadProductQuery();
    const [menu, setMenu] = useState(false);
    const [filter, setFilter] = useState('');

    if (isLoading) return <p>...Loading</p>;
    if (error) return <p>Error reading data</p>;

    const categoryList = [...new Set(data.map(product => product.category))];

    return (
        <div className="relatedProductWindowWrapper"
            style={{
                padding: menu ? '50px 10px 10px' : undefined,
                border: menu ? 'dashed 1px #00000033' : undefined,
                marginBottom: !menu ? '15px' : undefined,
                minHeight: menu && '200px'
            }}>
            <h5 onClick={() => setMenu(!menu)}
                style={{ top: menu ? '15px' : '-25px' }}
                title={menu ? "Close" : undefined}>
                {menu ? 'X' : '+ Add Related Products'}
            </h5>

            {menu && (
                <>
                    <h6>Select Related Products</h6>
                    <nav>
                        <h5 onClick={() => setFilter('')} className={filter === '' ? 'activeCategory' : ''}>SHOW ALL</h5>
                        {categoryList.map(category => (
                            <h5 key={category} onClick={() => setFilter(category)} className={filter === category ? 'activeCategory' : ''}>{ category.toUpperCase() }</h5>
                        ))}
                    </nav>

                    <div className="relatedProductWindowWrapperSmall">
                        {data.map(product => {
                            if (!productData.relatedProducts.includes(product._id) && productData.id !== product._id && (!filter || product.category === filter)) {
                                return (
                                    <div className="relatedProductWrapper"
                                        key={product._id}
                                        onClick={() => handleRelatedProducts(product._id)}>
                                        <div className="relatedProductImageWrapper">
                                            <img src={product.imageUrls[0]} alt={product.title} />
                                        </div>
                                        <p>{product.title}</p>
                                        <p style={{ color: '#888' }}>{product.description.slice(0, 50)}</p>
                                    </div>
                                )
                            }
                            return null;
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default RelatedProduct;