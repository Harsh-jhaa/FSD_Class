import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [regData, setRegData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegData((regData) => ({
      ...regData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (regData.password === regData.confirmPassword && regData.password) {
      navigate('/login');
      console.log(regData);
      alert('Registered Successfully');
    } else {
      setError('Password does not match');
      setRegData({ password: '', confirmPassword: '' });
    }
  };

  return (
    <div className=' h-[70%] w-[85%] bg-gray-900 rounded-[2rem] flex items-center justify-center '>
      <form
        onSubmit={handleSubmit}
        className='w-[50%] text-center flex flex-col gap-[1rem] flex-wrap'
      >
        <h1 className='text-4xl text-center mt-[1rem] mb-[2rem]'>
          REGISTRATION
        </h1>
        <div className='details text-center flex flex-col gap-[1rem] '>
          <div className='username'>
            <label htmlFor='userName'>User-Name : </label>
            <input
              required
              placeholder='User Name'
              type='text'
              className='w-[10rem] hover:border-green-300 border-[2px] hover:w-[10.1rem]  shrink-0 rounded-sm text-center text-black'
              name='userName'
            />
          </div>
          <div className='pswd'>
            <label htmlFor='password'>Password : </label>
            <input
              required
              onChange={handleChange}
              type='password'
              className='w-[10rem] hover:border-green-300 border-[2px] hover:w-[10.1rem]  shrink-0 rounded-sm text-center text-black'
              // id='password'

              name='password'
              placeholder='Password'
              value={regData.password}
            />
          </div>
          <div className='cnfmPswd'>
            <label htmlFor='cnfrmpswd'>Confirm Password : </label>
            <input
              required
              onChange={handleChange}
              value={regData.confirmPassword}
              type='password'
              className='w-[10rem] rounded-sm text-center hover:border-green-300 shrink-0 border-[2px] hover:w-[10.1rem] text-black'
              placeholder='Confirm Password'
              name='confirmPassword'

              // id='cnfrmpswd'
            />
          </div>
          <button
            className='bg-blue-500 w-[19.3rem] hover:bg-blue-700 hover: text-white font-bold ml-[10.3rem] mb-[1rem]  py-2 px-4 rounded'
            type='submit'
          >
            Submit
          </button>
        </div>
        {error && <h1 className='mb-[2rem] text-3xl '>{error}, try again</h1>}
      </form>
    </div>
  );
};

export default Register;
