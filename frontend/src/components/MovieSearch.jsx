import React, { useState, useEffect } from "react";
import useLikedMovies from "../hooks/UseLikedMovies";
import axios from "axios";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [allResults, setAllResults] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const { likedMovies, toggleLike } = useLikedMovies();

  const handleSearch = async () => {
    if (query.trim() === "") {
      setAllResults([]);
      return;
    }
    try {
      const results = [];

      for (let i = 1; i <= 5; i++) {
        const response = await axios.get(
          "https://api.themoviedb.org/3/search/movie",
          {
            params: {
              api_key: import.meta.env.VITE_TMDB_API_KEY,
              query: query,
              page: i,
            },
          }
        );
        results.push(...response.data.results);
      }
      setAllResults(results);
      setVisibleCount(20);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🎬 Search Movies</h1>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          className="border p-2 rounded w-80"
          placeholder="Type a movie name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
        <button
          onClick={() => window.open("http://localhost:5173/liked", "_blank")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          🎉 See Liked Movies
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allResults
          .filter((movie) => movie.poster_path)
          .slice(0, visibleCount)
          .map((movie) => (
            <div
              key={movie.id}
              className="relative bg-white shadow-md rounded overflow-hidden p-2"
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={movie.title}
                className="rounded mb-2"
              />
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-sm text-gray-600">
                {movie.release_date?.slice(0, 4)}
              </p>
              <button
                onClick={() => toggleLike(movie)}
                className="absolute top-2 right-2 text-xl"
              >
                {likedMovies.some((m) => m.id === movie.id) ? "❤️" : "🤍"}
              </button>
            </div>
          ))}
      </div>

      {visibleCount < allResults.filter((m) => m.poster_path).length && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 20)}
            className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
