import mongoose from 'mongoose';

const homeSec2 = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    color: { type: String, required: true },
    isBlack: { type: Boolean, required: true },
}, {timestamps: true});

const HomeSec2 = mongoose.model('HomeSec2', homeSec2);

export default HomeSec2;