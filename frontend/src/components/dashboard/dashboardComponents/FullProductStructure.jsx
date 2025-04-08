import { useReadProductQuery } from "../../../features/productApi";

import ProductTemplate from "./ProductTemplate";


const FullProductStructure = ({ productId, setImageView }) => {
    const { data, isLoading, error} = useReadProductQuery();

    const relatedProduct = data?.find(p => p._id === productId);

    if(isLoading) return <p>Loading ...</p>
    if(error) return <p>Error loading content</p>

    return (
        <ProductTemplate
            product={relatedProduct}
            productId={productId}
            setImageView={setImageView}
        />
    )
}

export default FullProductStructure;