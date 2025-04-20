import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRouter from './routes/productRoutes.js';
import promoCodeRoutes from './routes/promoCodeRoutes.js';
import emailRoutes from './routes/emailRoutes.js';
import homePageRoutes from './routes/homePageRoutes.js';
import homeSec2Routes from './routes/homeSec2Routes.js';

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
connectDB();

app.use('/api/product', productRouter);
app.use('/api/promoCode', promoCodeRoutes);
app.use('/api/email', emailRoutes);
app.use('/api/homePage', homePageRoutes);
app.use('/api/homeSec2', homeSec2Routes);

app.get('/api/checkPassword/:password', async (req, res) => {
    const { password } = req.params;
    res.json(password === process.env.DASHBOARD_PASSWORD);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));