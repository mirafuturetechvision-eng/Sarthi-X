// src/services/authService.js

/**
 * Mock service to demonstrate how backend integration would work.
 * Replace these with actual fetch/axios calls in the future.
 */

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const login = async (email, password) => {
  console.log(`Attempting login for ${email} at ${BASE_URL}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simulate successful login
  return {
    success: true,
    user: {
      id: 1,
      name: 'Jane Doe',
      email: email,
      sarthiId: '#88291'
    },
    token: 'mock-jwt-token'
  };
};

export const register = async (userData) => {
  console.log(`Registering user at ${BASE_URL}`, userData);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Simulate successful registration
  return {
    success: true,
    message: 'Registration successful'
  };
};
