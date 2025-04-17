import mongoose from 'mongoose';

const newPromoCode = new mongoose.Schema({
    promoCode: {type: String, unique: true},
    discount: { type: Number, required: true },
    expiresAt: { type: Date },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

const PromoCode = mongoose.model('promocodes', newPromoCode);

export default PromoCode;