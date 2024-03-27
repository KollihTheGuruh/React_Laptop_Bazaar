import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState('');
    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate(); // Add this line


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isRegistering) {
            // Handle registration logic here
            console.log('Registering with:', email, password, confirmPassword);

            if (password !== confirmPassword) {
                setError('Passwords do not match');
                return;
            }

            try {
                const response = await fetch('http://localhost:5000/api/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                });
                const data = await response.json();
                console.log('Registration response:', data);
                // Handle success or error based on the response
                if (response.ok) {
                    // Registration successful, clear form and show success message
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                    setError('');
                    alert('Registration successful!');
                } else {
                    // Registration failed, show error message
                    setError(data.message || 'Registration failed');
                }
            } catch (error) {
                console.error('Registration error:', error);
                setError('Registration failed');
            }
        } else {
            // Handle login logic here
            console.log('Logging in with:', email, password);
            try {
                const response = await fetch('http://localhost:5000/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                });
                const data = await response.json();
                console.log('Login response:', data);
                // Handle success or error based on the response
                if (response.ok) {
                    // Login successful, clear form and redirect to home page or show success message
                    setEmail('');
                    setPassword('');
                    setError('');
                    setIsAuthenticated(true);
                    navigate('/'); 
                    // Redirect to home page or update state to indicate user is logged in
                } else {
                    // Login failed, show error message
                    setError(data.message || 'Login failed');
                }
            } catch (error) {
                console.error('Login error:', error);
                setError('Login failed');
            }
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>{isRegistering ? 'Register' : 'Login to Laptop Bazaar'}</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {isRegistering && (
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <button type="submit" className="login-button">
                        {isRegistering ? 'Register' : 'Login'}
                    </button>
                    <button type="button" onClick={() => setIsRegistering(!isRegistering)}>
                        {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
