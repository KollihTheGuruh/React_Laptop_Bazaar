import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import Home from './pages/Home';
import { Shop } from "./pages/shop";
import ProductDetails from './pages/ProductDetails';
import ComparePage from './pages/ComparePage';
import LoginPage from './pages/LoginPage';
import { Cart } from './pages/cart';
import { ContactPage } from './pages/ContactPage';
import LaptopsList from './components/LaptopsList'; // Import the LaptopsList component
import { AuthProvider } from './contexts/AuthContext';
import { ShopContextProvider } from './contexts/shop-context'; // Import the ShopContextProvider

function App() {
    return (
        <AuthProvider> {/* Wrap your app with AuthProvider */}
            <ShopContextProvider> {/* Wrap parts that use ShopContext */}
                <div className="app">
                    <Router>
                        <Header />
                        <main>
                            <Routes>
                                {/* <Route path="/" element={<Home />} /> */}
                                <Route path="/product/:id" element={<ProductDetails />} />
                                <Route path="/compare" element={<ComparePage />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/" element={<Shop />} />
                                <Route path="/laptops" element={<LaptopsList />} /> {/* Route for LaptopsList */}
                            </Routes>
                        </main>
                        <Footer />
                    </Router>
                </div>
            </ShopContextProvider>
        </AuthProvider>
    );
}

export default App;
