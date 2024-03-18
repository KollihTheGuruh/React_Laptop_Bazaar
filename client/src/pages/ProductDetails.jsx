import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams();
    const [laptop, setLaptop] = useState(null);

    useEffect(() => {
        // Fetch laptop details from the backend using the id from the URL
        fetch(`/api/laptops/${id}`)
            .then(response => response.json())
            .then(data => setLaptop(data))
            .catch(error => console.error('Error fetching laptop details:', error));
    }, [id]);

    if (!laptop) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-details">
            <h1>{laptop.name}</h1>
            <div className="details-container">
                <img src={laptop.image} alt={laptop.name} className="product-image" />
                <div className="details-info">
                    <p><strong>Brand:</strong> {laptop.brand}</p>
                    <p><strong>Processor:</strong> {laptop.processor}</p>
                    <p><strong>RAM:</strong> {laptop.ram}</p>
                    <p><strong>Storage:</strong> {laptop.storage}</p>
                    <p><strong>Generation:</strong> {laptop.generation}</p>
                    <p><strong>Screen Size:</strong> {laptop.screenSize}</p>
                    <p><strong>Speed:</strong> {laptop.speed}</p>
                    <p><strong>OS:</strong> {laptop.os}</p>
                    <p><strong>Graphics (GPU):</strong> {laptop.graphics}</p>
                    <p><strong>Material:</strong> {laptop.material}</p>
                    <p><strong>Price:</strong> ${laptop.price}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
