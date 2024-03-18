import React from 'react';

function CompareTable({ laptops }) {
    return (
        <table className="compare-table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Laptop Brand</th>
                    <th>Processor</th>
                    <th>RAM</th>
                    <th>Storage</th>
                    <th>Generation</th>
                    <th>Screen Size</th>
                    <th>Speed</th>
                    <th>OS</th>
                    <th>Graphics (GPU)</th>
                    <th>Material</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {laptops.map((laptop, index) => (
                    <tr key={index}>
                        <td><img src={laptop.image} alt={laptop.brand} className="compare-image" /></td>
                        <td>{laptop.brand}</td>
                        <td>{laptop.processor}</td>
                        <td>{laptop.ram}</td>
                        <td>{laptop.storage}</td>
                        <td>{laptop.generation}</td>
                        <td>{laptop.screenSize}</td>
                        <td>{laptop.speed}</td>
                        <td>{laptop.os}</td>
                        <td>{laptop.graphics}</td>
                        <td>{laptop.material}</td>
                        <td>${laptop.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CompareTable;
