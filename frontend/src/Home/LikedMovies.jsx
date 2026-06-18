import React, { useEffect, useState } from "react";
import axios from "axios";

const LikedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
  axios
    .get("http://localhost:5000/api/likes")
    .then((res) => {
      console.log("Fetched liked movies from backend:", res.data);
      setMovies(res.data);
    })
    .catch((err) => console.error("Failed to fetch liked movies", err));
}, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎉 Your Liked Movies</h1>

      {movies.length === 0 ? (
        <p className="text-gray-600">No liked movies yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-white rounded shadow p-2">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="rounded mb-2"
              />
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-sm text-gray-500">{movie.release_date?.slice(0, 4)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedMovies;
