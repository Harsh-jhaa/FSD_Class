import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const regData = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(userData);
    navigate('/login', { state: { userData } });
    // navigating to login page and passing the userData as state to use in login page
  };

  return (
    <div>
      <div
        userdata={userData}
        className='flex items-center justify-center min-h-screen bg-gray-800'
      >
        <div className='w-full max-w-md bg-gray-400 shadow-lg rounded-lg p-6'>
          <h2 className='text-2xl font-bold mb-4 text-center'>
            Register Yourself
          </h2>
          <form>
            {/* Name Field */}
            <div className='mb-4'>
              <label
                className='block text-gray-700 font-medium mb-2'
                htmlFor='name'
              >
                User-Name
              </label>
              <input
                type='text'
                id='userName'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                placeholder='Your Name'
                // value={username}
                onChange={regData}
              />
            </div>

            {/* Email Field */}
            <div className='mb-4'>
              <label
                className='block text-gray-700 font-medium mb-2'
                htmlFor='email'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                placeholder='Your Email'
                onChange={regData}
              />
            </div>

            {/* Message Field */}
            <div className='mb-4'>
              <label
                className='block text-gray-700 font-medium mb-2'
                htmlFor='message'
              >
                Password
              </label>
              <input
                typeof='text'
                id='password'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                rows='4'
                placeholder='Your Password'
                onChange={regData}
              ></input>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300'
              onClick={handleRegistration}
              userdata={userData}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
