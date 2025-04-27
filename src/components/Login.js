import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    
    navigate('/test');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Ngp Student Login</h2>
        <input
          type="text"
          placeholder="Roll No"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
