import express from 'express';
import Product from '../models/ProductSchema.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.log('Error happened during reading data from db');
    res.status(500).json({ message: `Error fetching data ${err}` });
  }
});

router.post('/', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({ newProduct });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: `Product with id ${req.params.id} successfully deleted.` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/archive/:id', async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({ message: `Product's archive changed!.` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;