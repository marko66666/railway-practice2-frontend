import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/movies`);
      const data = await res.json();
      setMovies(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
          <p>{movie.rating}</p>
          <p>{movie.summary}</p>
          <br />
        </div>
      ))}
    </>
  );
}

export default App;
