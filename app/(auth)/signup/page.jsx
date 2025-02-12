'use client';
import API_PATHS from '@/app/lib/apiPaths';
import axiosInstance from '@/app/lib/axiosInstance';
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, phone, password, confirmPassword } = formData;

    if (!fullName || !email || !phone || !password || !confirmPassword) {
      toast.error('All fields are required!');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long!');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    // Handle signup logic here
    try {
      const response = await axiosInstance.post(
        API_PATHS.AUTH.SIGNUP,
        formData
      );
      toast.success(response.data.message || 'Signup successful!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed!');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-400'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
        <h2 className='text-3xl font-bold text-center text-gray-700 mb-6'>
          Create Your GrubMate Account
        </h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-600'>
              Full Name
            </label>
            <input
              type='text'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              className='w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none'
              placeholder='John Doe'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-600'>
              Email
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none'
              placeholder='example@email.com'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-600'>
              Phone Number
            </label>
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className='w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none'
              placeholder='+1 234 567 890'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-600'>
              Password
            </label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none'
              placeholder='••••••••'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-600'>
              Confirm Password
            </label>
            <input
              type='password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none'
              placeholder='••••••••'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:outline-none'
          >
            Sign Up
          </button>
        </form>

        <div className='mt-4 text-center'>
          <p className='text-sm text-gray-500'>
            Already have an account?{' '}
            <a href='/login' className='text-orange-500 hover:underline'>
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
