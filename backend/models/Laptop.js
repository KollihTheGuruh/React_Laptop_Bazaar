const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    processor: { type: String, required: true },
    ram: { type: String, required: true },
    storage: { type: String, required: true },
    generation: { type: String, required: true },
    screenSize: { type: String, required: true },
    speed: { type: String, required: true },
    os: { type: String, required: true },
    graphics: { type: String, required: true },
    material: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true } // URL to the laptop image
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Laptop = mongoose.model('Laptop', laptopSchema);

module.exports = Laptop;
