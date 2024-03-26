import React, { useState } from 'react';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isRegistering) {
            // Handle registration logic here
            console.log('Registering with:', email, password, confirmPassword);

            try {
                const response = await fetch('http://localhost:5000/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        confirmPassword: confirmPassword,
                    }),
                });
                const data = await response.json();
                console.log('Registration response:', data);
                // Handle success or error based on the response
            } catch (error) {
                console.error('Registration error:', error);
            }
        } else {
            // Handle login logic here
            console.log('Logging in with:', email, password);
            // Similar logic for login
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>{isRegistering ? 'Register' : 'Login to Laptop Bazaar'}</h1>
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
