import { FaBook, FaPen, FaTshirt } from "react-icons/fa";
import { LuSticker } from "react-icons/lu";
const Surprising = () => {
  return (
    <div className="py-5 my-14">
      <div className="border-2 border-cyan-400 mx-auto border-dashed  md:size-[500px] size-[300px] rote rounded-full relative">
        <div className="text-white relative md:size-[500px] size-[300px]">
          <div className="w-fit h-fit absolute top-0 left-0 right-0 bottom-0 m-auto">
            <p className="icon">
              <p className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text font-bold md:text-3xl text-2xl">
                Surprising Gifts
              </p>
            </p>
          </div>
          <div className="icons absolute anim -top-10 left-0 right-0 mx-auto border-2 border-dashed border-cyan-400 w-20 h-20 p-5 rounded-full z-20 text-center flex place-items-center justify-center bg-black">
            <p className="icon">
              <LuSticker className="text-4xl" />
            </p>
          </div>
          <div className="icons absolute anim bottom-0 top-0 my-auto -right-10  border-2 border-dashed border-cyan-400 w-20 h-20 p-5 rounded-full z-20 text-center flex place-items-center justify-center bg-black">
            <p className="icon">
              <FaPen className="text-4xl" />
              <span>Pen</span>
            </p>
          </div>
          <div className="icons absolute anim -bottom-10 left-0 right-0 mx-auto border-2 border-dashed border-cyan-400 w-20 h-20 p-5 rounded-full z-20 text-center flex place-items-center justify-center bg-black">
            <p className="icon">
              <FaTshirt className="text-4xl" />
              <span>Tshirt</span>
            </p>
          </div>
          <div className="icons absolute anim bottom-0 top-0 my-auto -left-10  border-2 border-dashed border-cyan-400 w-20 h-20 p-5 rounded-full z-20 text-center flex place-items-center justify-center bg-black">
            <p className="icon">
              <FaBook className="text-4xl" /> <span>Book</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surprising;
