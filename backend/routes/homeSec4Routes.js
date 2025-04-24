import express from 'express';
import HomeSec4 from '../models/homeSec4Schema.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newOffer = new HomeSec4(req.body);
        const savedOffer = await newOffer.save();
        res.status(201).json(savedOffer);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const offers = await HomeSec4.find();
        res.json(offers);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedOffer = await HomeSec4.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedOffer);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await HomeSec4.findByIdAndDelete(id);
        res.json({ message: 'Offer is successfully deleted' });
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;