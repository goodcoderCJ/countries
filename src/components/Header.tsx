import { FaMoon, FaSun } from "react-icons/fa";

import { useState } from "react";
const Header = () => {
  const [theme, setTheme] = useState(true);

  const handleTheme = () => {
    if (theme) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setTheme(!theme);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme(!theme);
    }
  };
  return (
    <header className="text-[#111111] dark:text-[white] dark:bg-[#202c37] bg-[white] shadow-lg">
      <div className="header-content flex justify-between items-center py-[1em] px-[1em] sm:px-[3em] md:px-[3em] gap-3 md:gap-0">
        <p className="text-xs md:text-base">Where in the world?</p>
        <button
          className="mode flex gap-2 justify-center items-center"
          onClick={handleTheme}
        >
          <div className="mode-icon flex justify-center items-center">
            {theme ? (
              <FaMoon className="text-[0.6rem]" />
            ) : (
              <FaSun className="text-[0.6rem]" />
            )}
          </div>
          {theme ? (
            <p className=" text-xs md:text-[0.9rem]">Dark Mode</p>
          ) : (
            <p className=" text-xs md:text-[0.9rem]">Light Mode</p>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
