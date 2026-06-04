import { useState, useEffect } from "react";
import axios from "axios";

const UseLikedMovies = () => {
  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    const fetchLiked = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/likes");
        setLikedMovies(res.data); // store all liked movies
      } catch (err) {
        console.error("Error fetching liked movies:", err);
      }
    };

    fetchLiked(); // call it on page load
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/likes")
      .then((res) => setLikedMovies(res.data))
      .catch((err) => console.error(err));
  }, []);

  const toggleLike = async (movie) => {
    const exists = likedMovies.find((m) => m.id === movie.id);
    if (exists) {
      await axios.delete(`http://localhost:5000/api/unlike/${movie.id}`);
      setLikedMovies((prev) => prev.filter((m) => m.id !== movie.id));
    } else {
      await axios.post("http://localhost:5000/api/like", movie);
      setLikedMovies((prev) => [...prev, movie]);
    }
  };

  return { likedMovies, toggleLike };
};
export default UseLikedMovies;
