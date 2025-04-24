import mongoose from 'mongoose';

const newOffer = new mongoose.Schema({
    imageLink: { type: String },
    title: { type: String },
    titleColor: { type: String },
    description: { type: String },
    descriptionColor: { type: String },
    list: [{ type: String }],
    isBlack: { type: Boolean },
    isSpecial: { type: Boolean, default: false }
});

const HomeSec4 = mongoose.model('Offers', newOffer);

export default HomeSec4;