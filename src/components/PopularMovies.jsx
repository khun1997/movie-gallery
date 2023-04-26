import React from "react";
import useFetchApi from "../hooks/useFetchApi";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const PopularMovies = () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=11356634b9dcf6295eeb70774a206345&language=en-US";

  const [movies, loading] = useFetchApi(url);
  return (
    <>
      <div className="">
        <p className="text-red-700 flex justify-center items-center my-20 text-5xl">
          Popular Movies
        </p>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <section>
            <div className="flex w-full h-screen flex-wrap justify-evenly">
              {movies.map((movie, id) => {
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
                    <Link
                      to={`/detail/${movie.id}`}
                      className="group-hover:w-16 h-16 text-red-600 absolute left-32 top-16"
                    >
                      <PlayCircleIcon />
                    </Link>
                    {/* text box in card open */}
                    <div className="h-auto">
                      <p className="text-red-700 text-lg my-2 ">
                        {movie.title}
                      </p>
                      <p className="text-xs my-2 text-white">
                        - release date : {movie.release_date}
                      </p>
                      <p className="text-white mb-1 text-xs">
                        - Subtitle Language : {movie.original_language}
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
