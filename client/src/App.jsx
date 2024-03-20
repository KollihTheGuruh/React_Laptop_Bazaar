import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ComparePage from './pages/ComparePage';
import LoginPage from './pages/LoginPage';

function App() {
    return (
            <div className="app">
                <main>
                    <Router>
                    <Header />
                        <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/product/:id" element={<ProductDetails/>} />
                        <Route path="/compare" element={<ComparePage/> } />
                        <Route path="/login" element={<LoginPage/>} />
                        </Routes>
                        <Footer />
                    </Router>
                </main>
            </div>
    );
}

export default App;
