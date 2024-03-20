import React, { useState, useEffect } from 'react';
import CompareTable from '../components/CompareTable';

function ComparePage() {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        // Fetch laptops from the backend for comparison
        fetch('/api/laptops/compare')
            .then(response => response.json())
            .then(data => setLaptops(data))
            .catch(error => console.error('Error fetching laptops for comparison:', error));
    }, []);

    return (
        <div className="compare-page">
            <h1>Compare Laptops</h1>
            <CompareTable laptops={laptops} />
        </div>
    );
}

export default ComparePage;