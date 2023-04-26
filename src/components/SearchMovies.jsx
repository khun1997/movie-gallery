import { PlayCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// 11356634b9dcf6295eeb70774a206345
const SearchMovies = () => {
  const { title } = useParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchApi = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=11356634b9dcf6295eeb70774a206345&language=en-US&query=${title}&page=1&include_adult=false`
    );
    const data = await response.json();
    setSearchMovies(data.results);
    setLoading(false);
  };
  useEffect(() => {
    fetchApi();
  }, [title]);
  return (
    <>
      <div className="">
        <p className="text-red-700 flex justify-center items-center my-20 text-5xl">
          Searched Movies
        </p>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <section>
            <div className="flex w-full flex-wrap justify-evenly ">
              {searchMovies.map((movie) => {
                return (
                  // card start
                  <div
                    key={movie.id}
                    className="relative w-80 h-auto group m-3 p-4 hover:scale-110 transition ease-in-out duration-500 border-solid border border-gray-500 rounded-md border-opacity-50"
                  >
                    <img
                      className="group-hover:opacity-70"
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                      alt={movie.title}
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

export default SearchMovies;
