import Header from "./header";
const Banner = () => {
  const scrollToTextSection = () => {
    const textSection = document.getElementById('registerSection');
    if (textSection) {
      textSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="">
      <Header />
      <div className="">
        <div
          className="relative h-[100vh]"
          style={{
            background: `url(https://mainnet.mindscan.info/ipfs/QmdQAqaGUVQiSaVdtzu8ocFAtvejhxHrtt7FD4gsd3i82V)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" bg-black h-full  bg-opacity-50">
            <div className="max-w-[1280px] mx-auto px-3">
              <div className="text-[#fff] absolute text-center lg:text-left top-1/4 lg:top-1/3 lg:px-7">

                <h1 className="text-3xl lg:text-6xl leading-[1.2] font-semibold text-white ">
                  {"Power Up"}  <br /> {"Your Knowledge & Skills"}
                </h1>
                <p className="font-medium mt-4">
                  {"Let's build a great community of IT professionals, digital entrepreneurs and freelancers."} <br /> Powered By:
                  <span className="text-[#19c3fc] font-semibold"> Edulife IT Institute</span>
                </p>
                <div>
                  <div id=" ">

                    <button onClick={() => scrollToTextSection()} className="bg-gradient-to-r from-[#19c3fc] to-[#19d349] text-white text-xl mt-5 lg:mt-8  px-10   py-3 rounded-md  hover:scale-[1.03] duration-200    font-medium lg:text-lg">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className=" ">
          <h1 className="text-3xl lg:text-5xl font-semibold text-white">The ninth anniversary of Edulife IT Institute
          </h1>
          <p className="text-white font-medium mt-2">Hilltracts IT Cornival Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="text-[#21c964]">Edulife It instute</span></p>
          <div>
            <button className="mt-5 lg:mt-8 px-5 py-1 rounded-md  border-2  font-medium text-lg">Book Ticket</button>
          </div>
        </div> */}

      </div>





    </div>
  );
};

export default Banner;


{/* <div className=" ">

<div className=" colors2"></div>
</div> */}

