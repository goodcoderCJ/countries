import { FaMoon } from "react-icons/fa";

const Header = () => {
  return (
    <header className="text-white  bg-[#293947] shadow-lg">
      <div className="header-content flex justify-between items-center py-[1em] px-[3em]">
        <p>Where in the world?</p>
        <button className="mode flex gap-2 justify-center items-center">
          <div className="mode-icon flex justify-center items-center">
            <FaMoon className="text-[0.6rem]" />
          </div>
          <p className="text-[0.9rem]">Dark Mode</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
