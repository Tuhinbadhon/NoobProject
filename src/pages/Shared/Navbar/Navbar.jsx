//import { useState } from "react";
import { FaHeartCirclePlus, FaCodeCompare } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

import { logo } from "../../../assets/index";
const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const onToggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // <div className="flex items-center gap-6 ml-2">
  //   <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
  //     Sign in
  //   </button>
  //   <ion-icon
  //     onClick={onToggleMenu}
  //     name={isMenuOpen ? "close" : "menu"}
  //     className="text-3xl cursor-pointer md:hidden"
  //   ></ion-icon>
  // </div>;

  return (
    <nav className="bg-gray-900 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="Ipsita logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-300">
            Ipsita-Mart
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <FaSearch />
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FaSearch />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder="Search..."
            />
          </div>

          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
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
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FaSearch />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="flex items-center py-2 px-3 text-gray-200 rounded md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="flex items-center py-2 px-3 text-gray-200 rounded md:p-0"
                href="#"
              >
                Products
              </a>
            </li>
            <li className="flex items-center">
              <a className="flex items-center py-2 px-3 text-gray-200 rounded md:p-0">
                <FaHeartCirclePlus className="mr-2" />
                <span>Wishlist</span>
              </a>
            </li>
            <li className="flex items-center">
              <a className="flex items-center py-2 px-3 text-gray-200 rounded md:p-0">
                <FaCodeCompare className="mr-2" />
                <span>Compare</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
