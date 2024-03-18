import React, { useState } from 'react';
import ImageUpload from './ImageUpload';

function LaptopForm() {
    const [laptopData, setLaptopData] = useState({
        brand: '',
        processor: '',
        ram: '',
        storage: '',
        generation: '',
        screenSize: '',
        speed: '',
        os: '',
        graphics: '',
        material: '',
        price: '',
        image: '', // URL of the uploaded image
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLaptopData({ ...laptopData, [name]: value });
    };

    const handleImageUpload = (imageUrl) => {
        setLaptopData({ ...laptopData, image: imageUrl });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit laptopData to the backend...
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Input fields for other laptop details... */}
            <label>Brand:</label>
            <input
                type="text"
                name="brand"
                value={laptopData.brand}
                onChange={handleInputChange}
            />
            {/* Add more input fields for other properties... */}
            <ImageUpload onUpload={handleImageUpload} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default LaptopForm;
