import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
// import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json(); // Get data from response

        // Store the token from 'data' (replace 'token' with the actual key)
        localStorage.setItem('authToken', data.token); 

        // Redirect to dashboard (you'll need to implement the navigation)
        window.location.href = '/dashboard'; // Or use your router's navigation method
      } else {
        // Handle login errors
        console.error('Login failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="bg-white p-8 rounded shadow-md w-96"> 
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <a href="#" className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800">
              Forgot Password?
            </a>
          </div>
          <button
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
          >
            <i className="fab fa-google mr-2"></i> Login with Google
          </button> 

          <p className="mt-4 text-center">
            Don't have an account? <Link to="/signup" className="text-indigo-500 hover:text-indigo-800">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;