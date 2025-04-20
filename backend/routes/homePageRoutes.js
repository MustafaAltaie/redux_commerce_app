import express from 'express';
import HomeDb from '../models/homeSchema.js';
const router = express.Router();

router.put('/', async (req, res) => {
    try {
        const { homeSection1 } = req.body;
        const updatedHomePage = await HomeDb.findOneAndUpdate({}, { $set: { homeSection1 } }, { new: true, upsert: true });

        res.status(200).json({ updatedHomePage });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const homePage = await HomeDb.find();
        res.json(homePage);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;