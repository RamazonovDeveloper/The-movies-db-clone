import axios from "axios";
import React, { useEffect, useState } from "react";
import "./movies.css";
import filterChevron from "../../img/moviesFilter.svg";

function Movies() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDQ2OTFhYWVkMjYyNDlmODk3Y2Y5OGM5MmRhN2Q3NSIsInN1YiI6IjY2NTA5YjIxMDViNjY3ZTNlZDA2OGJmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vOTnwcb33j7euLXEmxJQCNyJR6PPmfvzXnGKa-YCYmM",
        },
      })
      .then((resp) => {
        setPopularMovies(resp?.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="moviesContainer">
      <h2>Popular Movies</h2>
      <div className="moviesWrapper">
        <div className="moviesFilter">
          <div className="sort">
            <h3>Sort</h3>
            <img src={filterChevron} alt="filter chevron" />
          </div>
          <div className="sort">
            <h3>Filters</h3>
            <img src={filterChevron} alt="filter chevron" />
          </div>
          <button className="filterSearch">Search</button>
        </div>
        <div className="moviesCards">
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
    </div>
  );
}

export default Movies;
