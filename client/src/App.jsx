import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Shop } from "./pages/shop";
import ProductDetails from './pages/ProductDetails';
import ComparePage from './pages/ComparePage';
import LoginPage from './pages/LoginPage';
import { Cart } from './pages/cart';
import { ContactPage } from './pages/ContactPage';
import AboutUs from './pages/AboutUs'; // Correct import statement for AboutUs
// import LaptopsList from './components/LaptopsList'; // Remove this import if not used
import { AuthProvider } from './contexts/AuthContext';
import { ShopContextProvider } from './contexts/shop-context';

function App() {
    return (
        <AuthProvider>
            <ShopContextProvider>
                <div className="app">
                    <Router>
                        <Header />
                        <main>
                            <Routes>
                                <Route path="/product/:id" element={<ProductDetails />} />
                                <Route path="/compare" element={<ComparePage />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/about" element={<AboutUs />} /> {/* Use element instead of component for React Router v6 */}
                                <Route path="/" element={<Shop />} />
                                {/* Add more routes as needed */}
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
