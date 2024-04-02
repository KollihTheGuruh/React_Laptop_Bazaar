import React, { useContext } from 'react';
import { ShopContext } from '../contexts/shop-context'; // Import ShopContext
import { PRODUCTS } from '../products'; // Import PRODUCTS
import CompareTable from '../components/CompareTable';

function ComparePage() {
    const { compareItems } = useContext(ShopContext); // Use ShopContext to get compareItems

    // Filter the PRODUCTS array to get only the laptops that are selected for comparison
    const laptopsToCompare = PRODUCTS.filter(product => compareItems[product.id]);

    return (
        <div className="compare-page">
            <h1>Compare Laptops</h1>
            <CompareTable laptops={laptopsToCompare} /> {/* Pass the filtered laptops to CompareTable */}
        </div>
    );
}

export default ComparePage;
