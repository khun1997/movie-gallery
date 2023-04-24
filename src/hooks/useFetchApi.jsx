import { useEffect, useState } from "react";

const useFetchApi = () => {
  const [moives, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=11356634b9dcf6295eeb70774a206345&language=en-US";

  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error.message);
    }
  };
  return [moives, loading, error];
};

export default useFetchApi;
