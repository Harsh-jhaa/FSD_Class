import { Outlet } from 'react-router-dom';

import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-800'>
      <div className='w-full max-w-md p-8 space-y-6 bg-white rounded shadow-lg'>
        <h2 className='text-2xl font-bold text-center text-gray-800'>Login</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          {/* Email Field */}
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
              placeholder='Enter your email'
              required
            />
          </div>
          {/* Password Field */}
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
              placeholder='Enter your password'
              required
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type='submit'
              className='w-full px-4 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:outline-none'
            >
              Login
            </button>
          </div>
        </form>
        <p className='text-sm text-center text-gray-600'>
          Don't have an account?{' '}
          <a
            href='/register'
            className='font-medium text-blue-600 hover:underline'
          >
            Sign up
          </a>
        </p>
      </div>
      {/* <Outlet /> */}
    </div>
  );
}

export default Login;
