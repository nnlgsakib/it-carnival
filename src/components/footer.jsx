
import logo2 from '../assets/logo.png';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


const Footer = () => {
  return (
    <div className='py-3'>
      <div>
        <img className='w-40' src={logo2} alt="" />
      </div>
      <div className='flex gap-3 pt-2 justify-between'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, debitis.
        </p>
        <div className='flex gap-1'>

          <FaFacebookF className='text-lg  cursor-pointer hover:text-[#19c3fc] ' />
          <IoLogoGithub className='text-lg  cursor-pointer hover:text-[#19c3fc] ' />
          <FaLinkedinIn className='text-lg  cursor-pointer hover:text-[#19c3fc] ' />
          <TbWorld className='text-lg  cursor-pointer hover:text-[#19c3fc] ' />

        </div>
      </div>
    </div>
  );
};

export default Footer;