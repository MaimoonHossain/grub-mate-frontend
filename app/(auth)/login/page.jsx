'use client';
import API_PATHS from '@/app/lib/apiPaths';
import axiosInstance from '@/app/lib/axiosInstance';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    if (!email || !password) {
      toast.success('All fields are required!');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long!');
      return;
    }

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success('Login successful!');
        // Redirect to home page
        // window.location.href = '/';
      }
    } catch (error) {
      toast.error(error.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 flex items-center justify-center'>
      <div className='bg-white rounded-lg shadow-lg p-8 max-w-md w-full'>
        <h2 className='text-3xl font-bold text-center text-gray-700 mb-6'>
          GrubMate
        </h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-600'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500'
              placeholder='Enter your email'
              required
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-600'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500'
              placeholder='Enter your password'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500'
          >
            Login
          </button>
        </form>

        <div className='mt-4 text-center'>
          <p className='text-sm text-gray-500'>
            Don't have an account?{' '}
            <a href='/signup' className='text-pink-500 hover:text-pink-600'>
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
