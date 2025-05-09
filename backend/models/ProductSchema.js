import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    shipment: { type: Number },
    discount: { type: Number },
    category: { type: String, required: true },
    brand: { type: String },
    fewLeft: { type: Boolean },
    availability: { type: Boolean, required: true },
    isArchived: { type: Boolean },
    imageUrls: { type: [String] },
    specifications: { type: Object },
    color: { type: String },
    weight: { type: String },
    rating: { type: Number },
    numOfReviews: { type: Number },
    tags: { type: [String] },
    relatedProducts: { type: [String] },
});

const Product = mongoose.model('products', productSchema);

export default Product;