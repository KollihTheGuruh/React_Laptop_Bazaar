import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ComparePage from './pages/ComparePage';
import LoginPage from './pages/LoginPage';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/product/:id" component={ProductDetails} />
                        <Route path="/compare" component={ComparePage} />
                        <Route path="/login" component={LoginPage} />
                        {/* Add more routes as needed */}
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
