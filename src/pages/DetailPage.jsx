import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import PlayCircleIcon from "@heroicons/react/24/solid";
const DetailPage = () => {
  const [movie, setMoive] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line
  }, [id]);
  const fetchApi = async () => {
    setLoading(true);
    const response =
      await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=11356634b9dcf6295eeb70774a206345&language=en-US
    `);
    const data = await response.json();
    setMoive(data);
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <h1 className="text-white w-full h-screen text-4xl flex justify-center items-center">
          Loading
        </h1>
      ) : (
        <>
          {/* background */}
          <img
            className=" h-screen w-full opacity-10 object-cover relative"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt=""
          />
          {/* background */}

          {/* text box open */}
          <div className="flex justify-center items-center rounded-xl">
            <div className="absolute flex h-auto justify-center bottom-20 items-center">
              <div className="border-2 ml-20 border-red-600  w-96 ">
                <img
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                ></img>
              </div>
              <div className="mx-10 p-5 w-2/5  h-auto text-white opacity-80 bg-gray-900 rounded-md">
                <p className="text-3xl text-red-600">{movie.title}</p>
                <p className="text-xs my-2 text-white">
                  release date : {movie.release_date}
                </p>
                {/* action comedy start*/}
                <div className="flex text-white text-sm space-x-4 my-2 ">
                  {movie.genres &&
                    movie.genres.map((data) => {
                      return (
                        <div className="">
                          <p className="bg-green-800 text p-1 rounded-md">
                            {data.name}
                          </p>
                        </div>
                      );
                    })}
                </div>
                {/* action comedy close*/}
                <p className="mt-3 text-red-600">Overview</p>
                <p className="text-xs">{movie.overview}</p>
                <p className="text-xs my-2 text-red-600">
                  Duration :{" "}
                  <span className="text-white">{movie.runtime} mins</span>{" "}
                </p>

                <p className="text-white mt-3 text-sm">
                  Subtitle Language : {movie.original_language}
                </p>
                <button className="bg-red-600 flex text-white py-1 px-2 items-center justify-center  rounded-lg mt-3">
                  <a href={movie.homepage}>Watch</a>
                  <PlayCircleIcon className="w-7 h-7" />
                </button>
              </div>
            </div>
          </div>
          {/* text box close */}
        </>
      )}
    </>
  );
};

export default DetailPage;
