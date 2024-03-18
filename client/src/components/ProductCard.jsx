import React from 'react';

function ProductCard({ laptop }) {
    return (
        <div className="product-card">
            <img src={laptop.image} alt={laptop.name} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{laptop.name}</h3>
                <p className="product-price">${laptop.price}</p>
                <button className="btn btn-primary">View Details</button>
            </div>
        </div>
    );
}

export default ProductCard;
