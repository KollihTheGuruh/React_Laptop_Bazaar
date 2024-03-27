import React, { useEffect, useState } from 'react';

function LaptopsList() {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        const fetchLaptops = async () => {
            const response = await fetch('/api/laptops');
            const data = await response.json();
            setLaptops(data);
        };
        fetchLaptops();
    }, []);

    return (
        <div className="laptops-list">
            {laptops.map((laptop) => (
                <div key={laptop._id} className="laptop-card">
                    <img src={laptop.image} alt={laptop.brand} />
                    <h3>{laptop.brand}</h3>
                    <p>Price: ${laptop.price}</p>
                    <button>Add to Cart</button>
                    <button>Compare</button>
                </div>
            ))}
        </div>
    );
}

export default LaptopsList;
