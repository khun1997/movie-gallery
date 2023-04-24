import React from "react";
const Nav = () => {
  return (
    <>
      <section className="flex justify-between text-red-500 mx-7">
        <a href="/" className="text-red-500 text-3xl p-3">
          MOVIE GALLERY
        </a>
        <div className="flex  items-center mr-4">
          <input className="w-47 h-7 "></input>

          <button className="text-black   cursor-pointer w-10 h-7  border-black  bg-white justify-center items-center flex ">
            <svg
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
        </div>
      </section>
    </>
  );
};

export default Nav;
