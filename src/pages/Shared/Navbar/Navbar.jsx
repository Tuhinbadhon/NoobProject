import { useState, useEffect } from "react";
import {
  FcServices,
  FcHome,
  FcList,
  FcVoicePresentation,
  FcSearch,
} from "@meronex/icons/fc/";
import { logo } from "../../../assets/index";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className={`bg-black w-full fixed z-20`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          onClick={scrollToTop}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="logo" />
          <span className="self-center md:text-2xl font-mono font-bold whitespace-nowrap text-white">
            TechShop
          </span>
        </Link>
        <div className="flex md:order-2">
          <div
            className={`relative ${isSearchOpen ? "block" : "hidden"} md:block`}
          >
            <input
              type="text"
              id="search-navbar"
              className="w-32 p-3 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700
    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder="Search here..."
            />
          </div>

          <button
            type="button"
            onClick={toggleSearch}
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200
             dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <FcSearch />
            <span className="sr-only">Search</span>
          </button>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
             focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`bg-black absolute top-14 right-0 ${
            isMenuOpen ? "block" : "hidden"
          } md:relative md:flex md:space-x-4 md:mt-0 md:border-0 md:top-0`}
        >
          <ul className="flex flex-col p-2 md:p-2 pt-2 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className="flex items-center py-2 px-3 text-gray-100 rounded md:p-0"
                aria-current="page"
              >
                <FcHome className="mr-2" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center py-2 px-3 text-gray-100 rounded md:p-0"
                to="/About"
              >
                <FcList className="mr-2" />
                <span>About</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className="flex items-center py-2 px-3 text-gray-100 rounded md:p-0"
                to="/Services"
              >
                <FcServices className="mr-2" />
                <span>Services</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className="flex items-center py-2 px-3 text-gray-100 rounded md:p-0"
                to="/Contact"
              >
                <FcVoicePresentation className="mr-2" />
                <span>ContactUs</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
