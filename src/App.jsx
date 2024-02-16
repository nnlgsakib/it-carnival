
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Root from './layout/Root';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import DashboardLayout from './layout/Dashboard';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <div>Error</div>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/",
          element: <Home />,
        },

      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },

      ],
    },
  ]);

  return (
    <div className=' '>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
