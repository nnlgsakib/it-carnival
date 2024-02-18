import speakers1 from "../../assets/images/pic-01.jpg";
import speakers2 from "../../assets/images/pic-02.jpg";
import speakers3 from "../../assets/images/pic-03.jpg";
import speakers4 from "../../assets/images/pic-04.jpg";
import speakers5 from "../../assets/images/pic-05.jpg";

const Speakers = () => {
  const allSpeakers = [
    {
      img: speakers1,
      name: "Hasin Hayder",
      title: "Founder & Educator, Learn With Hasin Hayder",
    },
    {
      img: speakers2,
      name: "Rahitul Islam",
      title: "popular information technology writer and journalist.",
    },
    {
      img: speakers3,
      name: "Masum Billah Bhuiyan",
      title: " founder of Giant Marketers",
    },
    {
      img: speakers4,
      name: "Rabbil Hasan",
      title: "senior software engineer, IDLC - Financing Happiness",
    },
    {
      img: speakers5,
      name: "Saidur Rahman Setu",
      title: "founder of JS Bangladesh",
    }
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
        {allSpeakers.map((data, i) => (
          <div key={i} className="flex-col text-center">
            <div className="body ">
              <div className="box">
                <div className="content">
                  <img className="" src={data.img} alt="" />
                  <div className="flex flex-col">
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="speakersName ">{data.name}</h2>
              <p className="text-[#d8d8d8] font-medium">
               {data.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;