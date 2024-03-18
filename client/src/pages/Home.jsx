import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        // Fetch laptops from the backend and update state
        fetch('/api/laptops')
            .then(response => response.json())
            .then(data => setLaptops(data))
            .catch(error => console.error('Error fetching laptops:', error));
    }, []);

    return (
        <div className="home-page">
            <h1>Welcome to Laptop Bazaar</h1>
            <div className="products-container">
                {laptops.map((laptop, index) => (
                    <ProductCard key={index} laptop={laptop} />
                ))}
            </div>
        </div>
    );
}

export default Home;
