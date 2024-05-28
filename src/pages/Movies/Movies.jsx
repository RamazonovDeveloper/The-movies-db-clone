import React, { useEffect, useState } from "react";
import movies from "../../repository/movies";
import "./movies.css";
import filterChevron from "../../img/moviesFilter.svg";
import { convertDate } from "../../repository/dataConvert";


function Movies() {
  const [popularMovies, setPopularMovies] = useState([]);

  async function getPopularMovies() {
    const resp = await movies.getMoviesByName("popular");
    setPopularMovies(resp.results);
  }

  useEffect(() => {
    getPopularMovies();
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
          {popularMovies.map((item) => {
            return (
              <div className="card">
                <span className="material-symbols-outlined moreIcon">more_horiz</span>
                <img
                  src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`}
                  alt=""
                />
                <div className="cardBody">
                  <span>
                    {Math.round(item.vote_average * 10)}
                    <p>
                      <sup>%</sup>
                    </p>
                  </span>
                  <h1>{item.original_title}</h1>
                  <p>{convertDate(item.release_date)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Movies;
