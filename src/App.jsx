import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Root from "./layout/Root";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import DashboardLayout from "./layout/Dashboard";
import Registration from "./components/dashboardComponents/Registration";
import Payment from "./components/dashboardComponents/Payment";
import AddPayment from "./components/dashboardComponents/AddPayment";

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
          index: true,
          element: <Navigate to="/dashboard/registration" />,
        },
        {
          path: "registration",
          element: <Registration />,
        },
        {
          path: "payment",
          element: <Payment />,
        },
        {
          path: "add-payment",
          element: <AddPayment />,
        },
      ],
    },
  ]);

  return (
    <div className=" ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
