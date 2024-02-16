import { Outlet } from "react-router";
import logo from "../assets/logo.png";
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
          <ul className="flex flex-col items-center gap-3">
              <li className="hover:bg-slate-700 w-full text-center py-2 font-bold text-[16px] hover:text-red-400 duration-300">Registration</li>
              <li className="hover:bg-slate-700 w-full text-center py-2 font-bold text-[16px] hover:text-red-400 duration-300">Payment</li>
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
