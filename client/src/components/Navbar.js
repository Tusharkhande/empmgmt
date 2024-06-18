import React from "react";
import { FaSearch } from "react-icons/fa";
// import logo from "../assets/icons/logo.png";

const Navbar = () => {
  return (
    <div className="flex flex-wrap bg-slate-600">
      <div className="px-3  mx-auto w-11/12  rounded-xl">
        <div className="sm:flex items-stretch justify-between grow lg:mb-0  py-5 px-5">
          <div className="flex flex-col flex-wrap justify-center mb-5 mr-3 lg:mb-0">
            <span className="my-0 text-white flex text-dark font-semibold text-[1.35rem]/[1.2] flex-col justify-center">
              TeamSync
            </span>
            {/* <img src={logo} alt='logo' className='w-28 h-20' /> */}
            <span className="pt-1 text-slate-300 text-sm font-medium">
              Employee Management System
            </span>
          </div>
          <div className="flex items-center lg:shrink-0 lg:flex-nowrap">
            <div className="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
              <FaSearch className="absolute ml-4" />
              <input
                className="block w-full min-w-[70px] py-3 pl-12 pr-4 text-base font-medium leading-normal bg-white border border-solid outline-none appearance-none placeholder:text-secondary-dark peer text-stone-500 border-stone-200 bg-clip-padding rounded-2xl"
                placeholder="Search..."
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
