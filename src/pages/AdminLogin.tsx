import React, { useState } from 'react';
import { ShieldCheck, User, Lock, AlertCircle } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin123') {
      setError('');
      alert('Login successful!');
      // You can navigate to /admin/dashboard or similar
    } else {
      setError('You are not authorized to access this area. Invalid credentials provided.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
        <div className="flex flex-col items-center mb-6">
          <ShieldCheck className="h-10 w-10 text-blue-400 mb-2" />
          <h2 className="text-2xl font-bold">Secure Admin Access</h2>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-t-lg px-4 py-2 text-center font-semibold text-white text-lg">
          Admin Portal
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-800 px-6 py-6 rounded-b-lg">
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded flex items-start mb-4">
              <AlertCircle className="w-5 h-5 mr-2 mt-1 text-red-500" />
              <span>{error}</span>
            </div>
          )}

          <div className="mb-4 relative">
            <User className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              className="pl-10 w-full py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6 relative">
            <Lock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="pl-10 w-full py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 rounded"
          >
            Sign In
          </button>

          <div className="text-sm text-gray-400 mt-4 text-center">
            Secure connection – Protected by advanced encryption
          </div>
        </form>

        <div className="text-center text-xs text-gray-500 mt-4">
          <Lock className="inline-block w-4 h-4 mr-1" />
          Secured by advanced encryption
        </div>
      </div>
    </div>
  );
};


