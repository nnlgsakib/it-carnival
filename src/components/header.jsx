
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="max-w-[1280px] mx-auto">

      <div className="px-3 lg:px-6 flex justify-between items-center place-items-center py-5">
        <img className="w-[180px] lg:w-[200px] h-14" src={logo} alt="" />
        {/* <div>
          <p className="font-semibold text-gray-200">Edulife</p>
        </div> */}

      </div>
    </div>
  );
};

export default Header;
