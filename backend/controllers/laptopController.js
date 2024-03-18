const Laptop = require('../models/Laptop');

// Get all laptops
const getAllLaptops = async (req, res) => {
    try {
        const laptops = await Laptop.find();
        res.json(laptops);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single laptop by ID
const getLaptopById = async (req, res) => {
    try {
        const laptop = await Laptop.findById(req.params.id);
        if (!laptop) {
            return res.status(404).json({ message: 'Laptop not found' });
        }
        res.json(laptop);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new laptop
const createLaptop = async (req, res) => {
    const laptop = new Laptop(req.body);
    try {
        const newLaptop = await laptop.save();
        res.status(201).json(newLaptop);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a laptop
const updateLaptop = async (req, res) => {
    try {
        const updatedLaptop = await Laptop.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedLaptop);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a laptop
const deleteLaptop = async (req, res) => {
    try {
        const laptop = await Laptop.findByIdAndDelete(req.params.id);
        if (!laptop) {
            return res.status(404).json({ message: 'Laptop not found' });
        }
        res.json({ message: 'Laptop deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllLaptops,
    getLaptopById,
    createLaptop,
    updateLaptop,
    deleteLaptop
};
