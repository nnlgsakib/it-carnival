import { Outlet } from "react-router";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <div>
      <div className="w-full">
        <div className="max-w-[1200px] mx-auto bg-gray-900 shadow-md shadow-[#FFFFFF] p-2">
          <nav className="flex justify-between items-center">
            <img className="w-[100px]" src={logo} alt="" />
            <div className="flex items-center gap-10">
              <NavLink to="/dashboard">Registration</NavLink>
              <NavLink to="/dashboard">payment</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex gap-5 max-w-[1200px] mx-auto mt-1">
          <nav className="flex flex-col gap-3 px-3 w-[250px] bg-gray-900 h-screen overflow-auto pt-5">
            <NavLink
              to="/dashboard/registration"
              className={({ isActive }) =>
                `w-full py-3 rounded pl-2 transition-all duration-300 ${
                  isActive ? "bg-green-300 text-black" : ""
                }`
              }
            >
              Registration
            </NavLink>
            <NavLink
              to="/dashboard/payment"
              className={({ isActive }) =>
                `w-full py-3 rounded pl-2 transition-all duration-300 ${
                  isActive ? "bg-green-300 text-black" : ""
                }`
              }
            >
              Payment
            </NavLink>
            <NavLink
              to="/dashboard/add-payment"
              className={({ isActive }) =>
                `w-full py-3 rounded pl-2 transition-all duration-300 ${
                  isActive ? "bg-green-300 text-black" : ""
                }`
              }
            >
              Add-Payment
            </NavLink>
            <NavLink
              to="/dashboard/add-registration"
              className={({ isActive }) =>
                `w-full py-3 rounded pl-2 transition-all duration-300 ${
                  isActive ? "bg-green-300 text-black" : ""
                }`
              }
            >
              Add-Registration
            </NavLink>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
