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
import AddRegistration from "./components/dashboardComponents/AddRegistration";
import Login from "./components/dashboardComponents/Login";
import Register from "./components/dashboardComponents/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <div className="text-3xl font-bold text-center mt-10">Not Found</div>,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
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
        {
          path: "add-registration",
          element: <AddRegistration />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
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
