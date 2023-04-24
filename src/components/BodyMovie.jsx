import React from "react";
import useFetchApi from "../hooks/useFetchApi";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const BodyMovie = () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=11356634b9dcf6295eeb70774a206345&language=en-US";

  const [movies, loading] = useFetchApi(url);
  return (
    <>
      <div className="">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <section>
            <div className="flex items-center justify-center my-10">
              <h1 className="text-white text-4xl">Popular | </h1>

              <h1 className="text-white text-4xl"> Most Watched</h1>
            </div>
            <div className="flex w-full h-screen flex-wrap justify-evenly ">
              {movies.map((movie) => {
                return (
                  // card start
                  <div key={movie.id} className="relative w-96 h-auto m-3 p-4 hover:scale-110 transition ease-in-out duration-500 border-solid border border-gray-500 rounded-md border-opacity-50">
                    <img
                      // className="w-96 h-52"
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                      alt=""
                    />
                    {/* text box in card open */}
                    <div className="h-52">
                      <p className="text-white text-sm my-2 ">{movie.title}</p>
                      <p className="text-gray-500 text-xs mb-2">{movie.overview}</p>
                      <button className=" w-28 h-9 absolute bottom-3 bg-white text-black border-solid  rounded inline-block ">
                        Watch
                        <PlayCircleIcon className="w-8 h-5 inline-block left-0 " />
                      </button>
                    </div>
                    {/* text box in card close */}
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BodyMovie;
