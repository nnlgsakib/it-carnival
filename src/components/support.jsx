import logo from '../assets/logo.png';


const Support = () => {
  return (
    <div className='py-6'>
      <p className='text-[#45cefb] font-medium'>SPONSORS & PARTNERS</p>

      <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5'>
        <div className='border-[1px] cursor-pointer border-[#19c3fc]    transation  duration-500  ease-in-out hover:scale-[1.07] shadowcolor w-fit p-3 rounded-md'>
          <img className='w-[220px]  px-3' src={logo} alt="" />
        </div>
        <div className='border-[1px] cursor-pointer border-[#19c3fc] shadowcolor  transation  duration-500  ease-in-out hover:scale-[1.07] hover:shadow-[#19c3fc] w-fit p-3 rounded-md'>
          <img className='w-[220px]  px-3' src={logo} alt="" />
        </div>
        <div className='border-[1px] cursor-pointer border-[#19c3fc] shadowcolor  transation  duration-500  ease-in-out hover:scale-[1.07] hover:shadow-[#19c3fc] w-fit p-3 rounded-md'>
          <img className='w-[220px]  px-3' src={logo} alt="" />
        </div>
        <div className='border-[1px] cursor-pointer border-[#19c3fc] shadowcolor  transation  duration-500  ease-in-out hover:scale-[1.07] hover:shadow-[#19c3fc] w-fit p-3 rounded-md'>
          <img className='w-[220px]  px-3' src={logo} alt="" />
        </div>
      </div>

    </div>
  );
};

export default Support;