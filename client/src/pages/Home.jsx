import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/laptops')
            .then(response => response.json())
            .then(data => setLaptops(data))
            .catch(error => console.error('Error fetching laptops:', error));
    }, []);

    return (
    <div className="home-page">
        <h1>Welcome to Laptop Bazaar</h1>
        <h2 className="moving-header">Featured Laptops</h2> {/* Add this line */}
        <div className="products-container">
            {laptops.map((laptop, index) => (
                <ProductCard key={index} laptop={laptop} />
            ))}
        </div>
    </div>
);
            }
export default Home;
