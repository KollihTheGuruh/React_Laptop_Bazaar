import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ComparePage from './pages/ComparePage';
import LoginPage from './pages/LoginPage';
import LaptopsList from './components/LaptopsList'; // Import the LaptopsList component
import { AuthProvider } from './contexts/AuthContext';

function App() {
    return (
        <AuthProvider> {/* Wrap your app with AuthProvider */}
            <div className="app">
                <Router>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/product/:id" element={<ProductDetails />} />
                            <Route path="/compare" element={<ComparePage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/laptops" element={<LaptopsList />} /> {/* Add this line */}
                        </Routes>
                    </main>
                    <Footer />
                </Router>
            </div>
        </AuthProvider>
    );
}

export default App;
