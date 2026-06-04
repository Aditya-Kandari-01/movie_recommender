const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();  // Load .env variables

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const movieSchema = new mongoose.Schema({
  id: Number,
  title: String,
  poster_path: String,
  release_date: String,
});

const Movie = mongoose.model("Movie", movieSchema);

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

// POST: Save liked movie


app.post("/api/like", async (req, res) => {
  const movie = req.body;
  const exists = await Movie.findOne({ id: movie.id });
  if (!exists) {
    await Movie.create(movie);
    return res.status(201).send("Movie liked!");
  }
  res.status(200).send("Already liked.");
});

// GET: Get all liked movies
app.get("/api/likes", async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// DELETE: Unlike a movie
app.delete("/api/unlike/:id", async (req, res) => {
  const { id } = req.params;
  await Movie.deleteOne({ id });
  res.send("Movie unliked.");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
