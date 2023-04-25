import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <section className="flex justify-between  mx-7">
        <a href="/" className="text-red-500 text-3xl p-3">
          MOVIE GALLERY
        </a>
        <div className="flex justify-center items-center text-red-500 ">
          <NavLink to={"/"}>Popular </NavLink>
          <p className="mx-3">|</p>
          <NavLink to={"/upcoming"}>Upcoming</NavLink>
        </div>
        <div className="flex  items-center mr-4">
          <label class="relative block">
            {/* <span class="sr-only">Search</span> */}
            <button class="absolute inset-y-0 right-2 flex items-center pl-2">
              <svg
                className="h-8 w-8 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
        </div>
      </section>
    </>
  );
};

export default Nav;
