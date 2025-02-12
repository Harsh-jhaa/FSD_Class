import { useState } from 'react';
import Register from './components/Register';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Products from './components/Products';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Register />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/products',
      element: <Products />,
    },
  ]);

  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center bg-black text-white font-bold '>
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
