import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieSearch from "./Home/MovieSearch";
import LikedMovies from "./Home/LikedMovies";
import Header from "./Home/Header";
import Login from "./auth/pages/Login"
import Register from "./auth/pages/Register"
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<MovieSearch />} />
          <Route path="/liked" element={<LikedMovies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
