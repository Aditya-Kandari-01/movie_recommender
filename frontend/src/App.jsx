import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieSearch from "./components/MovieSearch";
import LikedMovies from "./components/LikedMovies";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<MovieSearch />} />
          <Route path="/liked" element={<LikedMovies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
