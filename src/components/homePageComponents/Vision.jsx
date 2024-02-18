import { FaBrain } from "react-icons/fa6";
// import {  moveCursor } from "readline";

const Vision = () => {
  // const oncursor = moveCursor();
  return (
    <div className="max-w-[1200px] mx-auto mt-8">
      <h2 className="bg-cyan-400 w-fit py-2 px-4 rounded text-center mx-auto font-semibold after:content-[adfsas] after:w-10 after:h-2 after:bg-black">
        Developer Guidance
      </h2>
      <div className="flex flex-col gap-5">
        <div className="flex md:flex-row flex-col justify-between gap-10 items-center mt-5 text-white relative py-10">
          <div className="p-10 flex-1 flex justify-start gap-9 border border-[#19c3fc] rounded-lg self-class">
            <FaBrain className="text-4xl" />
            <p>
              Connect with peers, industry experts, and potential employers to
              expand their network
            </p>
          </div>
          <div className="p-10 flex-1 flex justify-start gap-9 border border-[#19c3fc] rounded-lg">
            <FaBrain className="text-4xl" />
            <p>
              Connect with peers, industry experts, and potential employers to
              expand their network
            </p>
          </div>
        </div>
        <div className="flex justify-around relative">
          <button className=" px-6 py-2 bg-gradient-to-r from-[#19c3fc] to-[#19d349] rounded">
            Enter
          </button>
          <h2 className="text-3xl font-bold text-red mx-5 middle-class text-cyan-400 bg-black">
            Hiltracts
          </h2>
          <button className=" px-6 py-2 bg-gradient-to-r from-[#19c3fc] to-[#19d349] rounded">
            Enter
          </button>
        </div>
        <div className="flex md:flex-row flex-col justify-between gap-10 items-center mt-5 text-white relative py-10">
          <div className="p-10 flex-1 flex justify-start gap-9 border border-[#19c3fc] rounded-lg self-class">
            <FaBrain className="text-4xl" />
            <p>
              Connect with peers, industry experts, and potential employers to
              expand their network
            </p>
          </div>
          <div className="p-10 flex-1 flex justify-start gap-9 border border-[#19c3fc] rounded-lg">
            <FaBrain className="text-4xl" />
            <p>
              Connect with peers, industry experts, and potential employers to
              expand their network
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
