import React from "react";
import useFetchApi from "../hooks/useFetchApi";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const HomeMovies = () => {
  const [movies, loading] = useFetchApi(
    "https://api.themoviedb.org/3/movie/popular?api_key=11356634b9dcf6295eeb70774a206345&language=en-US"
  );
  return (
    <div>
      {loading ? (
        <h1 className="text-white w-full h-screen text-4xl flex justify-center items-center">
          Loading
        </h1>
      ) : (
        <Splide
          options={{
            type: "loop",
            arrows: false,
            // rewind: true,
            // rewindSpeed: 40000,
            autoplay: true,
            interval: 4000,
          }}
        >
          {movies.map((movie) => {
            return (
              <SplideSlide>
                <div
                  key={movie.id}
                  className="relative w-full h-screen object-cover"
                >
                  <img
                    className="brightness-90"
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt=""
                  />
                  {/* text box in home open */}
                  <div className="absolute w-2/6 p-5 h-auto z-1 left-32 bottom-32 text-white opacity-80 bg-gray-900 rounded-md">
                    <p className="text-2xl my-2">{movie.original_title}</p>
                    <p className="text-sm my-2">
                      release date : {movie.release_date}
                    </p>
                    <p className="">Overview</p>
                    <p className="text-xs my-2 text-gray-400">
                      {movie.overview}
                    </p>
                    <div className="justify-center items-center">
                      {/* watch button */}
                      <Link to={`/detail/${movie.id}`} className="my-2 py-2 px-3  bg-red-700 border-solid border-red-700 border-2	 rounded-lg inline-block text-white justify-center items-center hover:scale-110 transition ease-in-out duration-500">
                         Watch Now
                        <PlayCircleIcon className="w-8 ml-2 inline-block left-0 " />
                      </Link >
                    </div>
                  </div>
                  {/* text box in home close */}
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      )}
    </div>
  );
};

export default HomeMovies;
