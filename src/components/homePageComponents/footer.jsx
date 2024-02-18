import { FaFacebookF } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import logo from "../../assets/white-logo.png";

const Footer = () => {
  return (
    <div className="py-5 flex flex-col justify-center items-center mx-auto mt-6">
      <div>
        <img className="w-40 cursor-pointer" src={logo} alt="" />
      </div>
      <div className="text-center  gap-3 pt-2  ">
        <p className="font-semibold mt-4">
          Experience a Better Tech Journey with Hilltracts IT Carnival 2024
        </p>
        <div className="flex items-center justify-center mt-5 gap-3">
          <FaFacebookF className="text-2xl  cursor-pointer hover:text-[#19c3fc] " />
          <IoLogoGithub className="text-2xl  cursor-pointer hover:text-[#19c3fc] " />
          <FaLinkedinIn className="text-2xl  cursor-pointer hover:text-[#19c3fc] " />
          <TbWorld className="text-2xl  cursor-pointer hover:text-[#19c3fc] " />
        </div>
      </div>
    </div>
  );
};

export default Footer;
