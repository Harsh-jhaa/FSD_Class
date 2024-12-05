import React from 'react';

const Registration = () => {
  return (
    <div>
      <div className='flex items-center justify-center min-h-screen bg-gray-800'>
        <div className='w-full max-w-md bg-gray-400 shadow-lg rounded-lg p-6'>
          <h2 className='text-2xl font-bold mb-4 text-center'>Contact Us</h2>
          <form>
            {/* Name Field */}
            <div className='mb-4'>
              <label
                className='block text-gray-700 font-medium mb-2'
                htmlFor='name'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                placeholder='Your Name'
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
              />
            </div>

            {/* Message Field */}
            <div className='mb-4'>
              <label
                className='block text-gray-700 font-medium mb-2'
                htmlFor='message'
              >
                Message
              </label>
              <textarea
                id='message'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                rows='4'
                placeholder='Your Message'
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300'
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
