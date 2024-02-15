import Header from "./header";
import backgroundImage from '../assets/banner.png';
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
          className="relative h-[80vh]"
          style={{
            background: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" bg-black h-full  bg-opacity-50">
            <div className="text-[#fff] absolute top-1/4 lg:top-1/4 px-5">
              <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold text-white ">
                {"The nine'th anniversary of Edulife IT Institute"}
              </h1>
              <p className=" font-medium mt-2">
                Hilltracts IT Cornival Lorem ipsum dolor sit amet consectetur
                adipisicing elit.{" "}
                <span className="text-[#21c964]">Edulife It instute</span>
              </p>
              <div>
                <div id=" ">

                  <button onClick={() => scrollToTextSection()} className="bg-gradient-to-l from-[#19c3fc] to-slate-800 text-white mt-5 lg:mt-8 px-3 lg:px-8 py-1 lg:py-2 rounded-md  hover:scale-[1.03] duration-200 border-2  font-medium lg:text-lg">
                    Register Now
                  </button>
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

