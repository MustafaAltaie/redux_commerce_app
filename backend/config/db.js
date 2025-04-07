import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Successfully connected to db 👍');
    } catch (err) {
        console.log('Error during connecting to db ', err);
        process.exit(1);
    }
}

export default connectDB;