const express = require('express');
const Laptop = require('../models/Laptop');
const router = express.Router();

// Get all laptops
router.get('/', async (req, res) => {
    try {
        const laptops = await Laptop.find();
        res.json(laptops);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single laptop by ID
router.get('/:id', async (req, res) => {
    try {
        const laptop = await Laptop.findById(req.params.id);
        if (!laptop) {
            return res.status(404).json({ message: 'Laptop not found' });
        }
        res.json(laptop);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new laptop
router.post('/', async (req, res) => {
    const laptop = new Laptop(req.body);
    try {
        const newLaptop = await laptop.save();
        res.status(201).json(newLaptop);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a laptop
router.put('/:id', async (req, res) => {
    try {
        const updatedLaptop = await Laptop.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedLaptop);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a laptop
router.delete('/:id', async (req, res) => {
    try {
        const laptop = await Laptop.findByIdAndDelete(req.params.id);
        if (!laptop) {
            return res.status(404).json({ message: 'Laptop not found' });
        }
        res.json({ message: 'Laptop deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/compare', async (req, res) => {
    try {
        const laptops = await Laptop.find(); // Modify this to fetch only the laptops needed for comparison
        res.json(laptops);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
