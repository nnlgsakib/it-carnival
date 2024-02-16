import { Outlet } from "react-router";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <div>
      <div className="w-full">
        <div className="max-w-[1200px] mx-auto bg-yellow-500 p-2">
          <div className="flex justify-between items-center">
            <img className="w-[100px]" src={logo} alt="" />
            <ul className="flex items-center gap-10">
              <li>Registration</li>
              <li>Payment</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-5 max-w-[1200px] mx-auto">
          <div className="w-[200px] bg-gray-900 h-screen overflow-auto">
            <nav className="flex flex-col gap-3 px-3">
              <NavLink
                to="/dashboard/registration"
                className=" w-full py-3 rounded pl-2 transition-all hover:bg-green-300 hover:text-black duration-300"
              >
                Registration
              </NavLink>
              <NavLink
                to="/dashboard/payment"
                className=" w-full py-3 rounded pl-2 transition-all hover:bg-green-300 hover:text-black duration-300"
              >
                Payment
              </NavLink>
              <NavLink
                to="/dashboard/add-payment"
                className=" w-full py-3 rounded pl-2 transition-all hover:bg-green-300 hover:text-black duration-300"
              >
                Add-Payment
              </NavLink>
            </nav>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
