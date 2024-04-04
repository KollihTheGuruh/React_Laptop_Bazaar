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
import AboutUs from './pages/AboutUs';
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
                                <Route path="/about" element={<AboutUs />} />
                                <Route path="/" element={<Shop />} />
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
