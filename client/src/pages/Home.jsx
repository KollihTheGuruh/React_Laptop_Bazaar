import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:3000/api/laptops', {
        //     method: "POST", 
        //     headers:
        // })
        //     .then(response => response.json())
        //     .then(data => setLaptops(data))
        //     .catch(error => console.error('Error fetching laptops:', error));
        const getLaptop = async() => {
            try{
              const res = await fetch('http://localhost:3000/api/laptops')
              const data = await res.json()
              setLaptops(data)
              console.log(data)
         }catch(error){
              console.log(error.message)
         }
         }
         getLaptop()
    }, []);

    return (
    <div className="home-page">
        <h1>Welcome to Laptop Bazaar</h1>
        <h2 className="moving-header">Featured Laptops</h2>
        <div className="products-container">
            {laptops.map((laptop, index) => (
                    <ProductCard key={index} laptop={laptop} />
            ))}
        </div>
    </div>
);
            }
export default Home;
