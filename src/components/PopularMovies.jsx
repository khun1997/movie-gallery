import React from "react";
import useFetchApi from "../hooks/useFetchApi";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const PopularMovies = () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=11356634b9dcf6295eeb70774a206345&language=en-US";

  const [movies, loading] = useFetchApi(url);
  console.log(movies);
  return (
    <>
      <div className="">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <section>
            {/* <div className="flex items-center justify-center my-10">
              <h1 className="text-white text-4xl">Popular | </h1>

              <h1 className="text-white text-4xl"> Most Watched</h1>
            </div> */}
            <div className="flex w-full h-screen flex-wrap justify-evenly ">
              {movies.map((movie) => {
                return (
                  // card start
                  <div
                    key={movie.id}
                    className="relative w-80 h-auto group m-3 p-4 hover:scale-110 transition ease-in-out duration-500 border-solid border border-gray-500 rounded-md border-opacity-50"
                  >
                    <img
                      className="group-hover:opacity-70"
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                      alt=""
                    />
                    <button className="group-hover:w-16 h-16 text-red-600 absolute left-32 top-16">
                      <PlayCircleIcon />
                    </button>
                    {/* text box in card open */}
                    <div className="h-auto">
                      <p className="text-red-500 text-lg my-2 ">{movie.title}</p>
                      <p className="text-xs my-2 text-white">
                        release date : {movie.release_date}
                      </p>
                      <p className="text-white mb-1 ">Overview</p>
                      <p className="text-gray-500 text-xs mb-2">
                        {movie.overview}
                      </p>
                    </div>
                    {/* text box in card close */}
                  </div>
                  // card close
                );
              })}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default PopularMovies;
