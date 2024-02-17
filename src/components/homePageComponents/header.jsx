
import logo from "../../assets/white-logo.png";

const Header = () => {
  return (
    <div className="max-w-[1280px] mx-auto">

      <div className="px-3 lg:px-6 flex justify-between items-end place-items-center py-2">
        <img className="w-[180px] lg:w-[200px] mx-auto cursor-pointer" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
