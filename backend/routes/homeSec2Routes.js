import express from 'express';
import HomeSec2 from '../models/homeSec2Schema.js';
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newSec = new HomeSec2(req.body);
        const savedCard = await newSec.save();
        res.status(201).json(savedCard);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const cards = await HomeSec2.find();
        if(!cards) {
            res.json('No cards found');
        }
        res.json(cards);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatesCard = await HomeSec2.findByIdAndUpdate(id, req.body, { new: true });
        if(!updatesCard) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.json(updatesCard);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;