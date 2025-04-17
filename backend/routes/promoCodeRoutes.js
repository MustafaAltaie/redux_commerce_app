import express from 'express';
import PromoCode from '../models/promoCodeSchema.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newPromo = new PromoCode(req.body);
        await newPromo.save();
        res.status(201).json({ newPromo });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

router.get('/', async (req, res) => {
    try {
        const promoCodes = await PromoCode.find();
        res.json(promoCodes);
    } catch (err) {
        res.status(5000).json({ message: err.message });
    }
});

router.get('/:promoName', async (req, res) => {
    try {
      const promoCode = await PromoCode.findOne({ promoCode: req.params.promoName });
      if (!promoCode) return res.status(404).json({ message: "promoCode not found" });
      res.status(200).json(promoCode);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await PromoCode.findByIdAndDelete(req.params.id);
        res.json({ message: 'promo-code has successfully deleted.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;