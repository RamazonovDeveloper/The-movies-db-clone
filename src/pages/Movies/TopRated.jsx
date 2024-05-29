import React, { useEffect, useState } from "react";
import movies from "../../repository/movies";
import "./default.css";

import filterChevron from "../../img/moviesFilter.svg";
import { convertDate } from "../../repository/dataConvert";

function TopRated() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  async function getTopRatedMovies() {
    const resp = await movies.getMoviesByName(
      "top_rated?language=en-US&page=1"
    );
    setTopRatedMovies(resp.results);
  }

  useEffect(() => {
    getTopRatedMovies();
  }, []);
  return (
    <div className="moviesContainer">
      <h2>Top Rated Movies</h2>
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
          {topRatedMovies?.map((item, index) => {
            return (
              <div key={index} className="card">
                <span className="material-symbols-outlined moreIcon">
                  more_horiz
                </span>
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

export default TopRated;
