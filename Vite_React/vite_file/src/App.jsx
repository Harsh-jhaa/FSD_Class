// import NameCard from './components/NameCard';
import './/index.css';
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './components/NewComponents/MainLayout';
import Registration from './components/NewComponents/Registration';
import Dashboard from './components/NewComponents/Dashboard';
import Login from './components/NewComponents/Login';
import { Link } from 'react-router-dom';

// import Child from './components/Child';
// import Counter_Color from './components/Counter_Color';
function App() {
  // const user1 = {
  //   named: 'Harsh Jha',
  //   branch: 'CSE-AIML C',
  //   roll: '2200321530073',
  // };
  // const user2 = {
  //   named2: 'Meow Meow',
  //   branch2: 'CSE-AIML B',
  //   roll2: '2200321530072',
  // };
  // const college_info = {
  //   clgName: 'ABES Engineering College',
  //   year: [1, 2, 3, 4],
  //   date: new Date().toLocaleDateString(),
  // };
  const paths = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: 'login',
          element: <Login />,
        },

        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: 'registration',
          element: <Registration />,
        },
      ],
    },
    {
      path: '*',
      element: (
        <h1 className='text-2xl text-red-500 text-center pt-[5rem]'>
          <span className='text-red-500 text-4xl font-bold'>404</span> Page Not
          Found
        </h1>
      ),
    },
  ]);
  return (
    <div>
      {/* <NameCard name={user1.named} branch={user1.branch} roll={user1.roll} />
      <NameCard name={user2.named2} branch={user2.branch2} roll={user2.roll2} />
      <Child info={college_info} /> */}
      {/* <Counter_Color /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/dash' element={<Dashboard />} />
        </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter Router={paths}>
        <MainLayout />
      </BrowserRouter> */}
      <RouterProvider router={paths} />
    </div>
  );
}

export default App;
