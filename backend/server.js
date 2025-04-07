import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRouter from './routes/productRoutes.js'

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
connectDB();

app.use('/api/product', productRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));