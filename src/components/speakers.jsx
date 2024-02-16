import speakers5 from "../assets/images/pic-01.jpg";
import speakers2 from "../assets/images/pic-02.jpg";
import speakers1 from "../assets/images/pic-03.jpg";
import speakers3 from "../assets/images/pic-04.jpg";

const Speakers = () => {
  const allSpeakers = [
    {
      img: speakers1,
      name: "Hasin Hayder",
      title: 'Founder & Educator, Learn With Hasin Hayder'
    },
    {
      img: speakers1,
      name: "Rabbil Hasan Rupom",
      title: 'Founder & Educator, Learn with Rabbil Hasan'
    },
    {
      img: speakers1,
      name: "Saidur Rahman Setu",
      title: 'Founder & Educator, JS Bangladesh'
    },
    {
      img: speakers1,
      name: "Founder & Educator, JS Bangladesh",
      title: 'Founder, Jadupc'
    },
    {
      img: speakers1,
      name: "Founder & Educator, JS Bangladesh",
      title: 'Head of Engineering, ZELF'
    },

  ];

  return (
    <div className=" mt-5 lg:mt-8">
      <div className="my-5">
        <div className="pb-3">
          <h2 className="text-2xl lg:pb-4 lg:text-4xl  text-white font-semibold  ">
            Speakers
          </h2>
          <div className="w-8 h-1 mt-1 bg-gradient-to-r from-cyan-400  to-[#893eba] bg-white rounded-sm"></div>
        </div>

        <h2 className="font-medium">
          Join the HillTracts IT Carnival 2024 and be packed with networking,
          knowledge-sharing and other activities.
        </h2>
      </div>

      <div className="mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 lg:gap-8">
        <div className="w-[250px] text-center">
          <div className="  speakersIamgeContainer borderColor">
            <img className="speakersIamge" src={speakers5} alt="" />
          </div>
          <div className="">
            <h2 className="speakersName">Hasin Hayder</h2>
            <p className="text-[#d8d8d8] font-medium">
              IT industry expert and extraordinary visionary in web development
            </p>
          </div>
        </div>
        <div className="w-[250px] text-center">
          <div className="speakersIamgeContainer borderColor">
            <img className="speakersIamge" src={speakers2} alt="" />
          </div>
          <div className="">
            <h2 className="speakersName ">Rahitul Islam</h2>
            <p className="text-[#d8d8d8] font-medium">
              popular information technology writer and journalist
            </p>
          </div>
        </div>
        <div className="w-[250px] text-center">
          <div className="speakersIamgeContainer borderColor">
            <img
              className="rounded-full w-full h-full hover:scale-105 duration-300"
              src={speakers3}
              alt=""
            />
          </div>
          <div className="">
            <h2 className="speakersName ">Rabbil Hasan</h2>
            <p className="text-[#d8d8d8] font-medium">
              senior software engineer, IDLC
            </p>
          </div>
        </div>

        <div className="w-[250px] text-center">
          <div className="speakersIamgeContainer borderColor">
            <img
              className="rounded-full hover:scale-105 duration-300"
              src={speakers1}
              alt=""
            />
          </div>
          <div className="">
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
