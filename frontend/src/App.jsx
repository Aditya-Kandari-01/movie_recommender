import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieSearch from "./Home/MovieSearch";
import LikedMovies from "./Home/LikedMovies";
import Header from "./Home/Header";
import Login from "./auth/pages/Login"
import Register from "./auth/pages/Register"
import AuthProvider from "./auth/Services/Context/authContext";

function App() {
  return (
    <AuthProvider>
      <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element= {<h1>Home page</h1>} />
          <Route path="/liked" element={<LikedMovies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
