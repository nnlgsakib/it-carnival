import { FaFacebookF } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import logo from "../../assets/white-logo.png";

const Footer = () => {
  return (
    <div className="py-5 mt-6">
      <div>
        <img className="w-40 cursor-pointer" src={logo} alt="" />
      </div>
      <div className="flex gap-3 pt-2 place-items-center justify-between">
        <p className="font-semibold">
          Experience a Better Tech Journey with Hilltracts IT Carnival 2024
        </p>
        <div className="flex gap-1">
          <FaFacebookF className="text-xl  cursor-pointer hover:text-[#19c3fc] " />
          <IoLogoGithub className="text-xl  cursor-pointer hover:text-[#19c3fc] " />
          <FaLinkedinIn className="text-xl  cursor-pointer hover:text-[#19c3fc] " />
          <TbWorld className="text-xl  cursor-pointer hover:text-[#19c3fc] " />
        </div>
      </div>
    </div>
  );
};

export default Footer;
