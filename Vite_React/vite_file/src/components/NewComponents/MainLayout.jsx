import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='h-screen '>
      <div className='h-[5rem] w-full bg-black text-white text-right`'>
        <h1 className='text-2xl text-center pt-[1.5rem]'>
          Hello, Welcome to the Main Layout Page
        </h1>
      </div>
      <ul className='flex justify-evenly'>
        <li className='bg-gray-700 w-[33.32%] text-center pt-[5px] text-white h-[3rem]'>
          <Link to='/login' className='text-xl'>
            Login
          </Link>
        </li>
        <li className='bg-gray-700 w-[33.32%] text-center pt-[5px] text-white h-[3rem]'>
          <Link to='/registration' className='text-xl'>
            Registration
          </Link>
        </li>
        <li className='bg-gray-700 w-[33.32%] text-center pt-[5px] text-white h-[3rem]'>
          <Link to='/dashboard' className='text-xl'>
            Dashboard
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MainLayout;
