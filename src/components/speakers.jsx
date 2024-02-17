import speakers1 from "../assets/images/pic-01.jpg";
import speakers2 from "../assets/images/pic-02.jpg";
import speakers3 from "../assets/images/pic-03.jpg";
import speakers4 from "../assets/images/pic-04.jpg";
import speakers5 from "../assets/images/rabbil.png";

const Speakers = () => {
  const allSpeakers = [
    {
      img: speakers1,
      name: "Hasin Hayder",
      title: 'Founder & Educator, Learn With Hasin Hayder'
    },
    {
      img: speakers2,
      name: "Rabbil Hasan Rupom",
      title: 'Founder & Educator, Learn with Rabbil Hasan'
    },
    {
      img: speakers3,
      name: "Saidur Rahman Setu",
      title: 'Founder & Educator, JS Bangladesh'
    },
    {
      img: speakers4,
      name: "Founder & Educator, JS Bangladesh",
      title: 'Founder, Jadupc'
    },
    {
      img: speakers5,
      name: "Founder & Educator, JS Bangladesh",
      title: 'Head of Engineering, ZELF'
    },

  ];

  return (
    <div className=" mt-5 lg:mt-8">
      <div className="my-5">
        <div className="pb-3">
          <h2 className="text-2xl lg:text-4xl text-white font-semibold  ">
            Speakers
          </h2>
          <div className="w-8 h-1 mt-1 bg-gradient-to-r from-[#19c3fc]  to-[#19d449] bg-white rounded-sm"></div>
        </div>

        <h2 className="font-medium">
          Join the HillTracts IT Carnival 2024 and be packed with networking,
          knowledge-sharing and other activities.
        </h2>
      </div>

      <div className="mx-auto grid py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 lg:gap-7">
        <div className="flex-col text-center">
          <div className="body ">
            <div className="box">
              <div className='content'>
                <img className='' src={speakers5} alt="" />
                <div className='flex flex-col'>
                  {/* <h2>Lorem, ipsum dolor.</h2>
                <p className='w-[100px] cursor-pointer text-center mx-auto'>Connect</p> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="speakersName ">Masum Billah Bhuiyan</h2>
            <p className="text-[#d8d8d8] font-medium">
              founder of Giant Marketers
            </p>
          </div>
        </div>
        <div className="body flex-col text-center">
          <div className="box">
            <div className='content'>
              <img className='' src={speakers3} alt="" />
              <div className='flex flex-col'>
                {/* <h2>Lorem, ipsum dolor.</h2>
                <p className='w-[100px] cursor-pointer text-center mx-auto'>Connect</p> */}
              </div>
            </div>
          </div>
          <div>
            <h2 className="speakersName ">Masum Billah Bhuiyan</h2>
            <p className="text-[#d8d8d8] font-medium">
              founder of Giant Marketers
            </p>
          </div>
        </div>
        <div className="body flex-col text-center">
          <div className="box">
            <div className='content'>
              <img className='' src={speakers3} alt="" />
              <div className='flex flex-col'>
                {/* <h2>Lorem, ipsum dolor.</h2>
                <p className='w-[100px] cursor-pointer text-center mx-auto'>Connect</p> */}
              </div>
            </div>
          </div>
          <div>
            <h2 className="speakersName ">Masum Billah Bhuiyan</h2>
            <p className="text-[#d8d8d8] font-medium">
              founder of Giant Marketers
            </p>
          </div>
        </div>
        <div className="body flex-col text-center">
          <div className="box">
            <div className='content'>
              <img className='' src={speakers3} alt="" />
              <div className='flex flex-col'>
                {/* <h2>Lorem, ipsum dolor.</h2>
                <p className='w-[100px] cursor-pointer text-center mx-auto'>Connect</p> */}
              </div>
            </div>
          </div>
          <div>
            <h2 className="speakersName ">Masum Billah Bhuiyan</h2>
            <p className="text-[#d8d8d8] font-medium">
              founder of Giant Marketers
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Speakers;
