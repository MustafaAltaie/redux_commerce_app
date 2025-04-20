import mongoose from 'mongoose';

const homeDb = new mongoose.Schema({
    homeSection1: [{ type: String }],
});

const HomeDb = mongoose.model('HomePage', homeDb);

export default HomeDb;