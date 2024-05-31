import React from "react";
import "./home.css";
import Oscar from "../../img/homeOscars.svg";
import ToggleButton from "../../repository/btn/toggleBtn";
import { useState, useEffect } from "react";
import homeTrending from "../../repository/homeTrending";

function Home() {
  const [trendData, setTrendData] = useState([]);
  async function getPopularMovies() {
    const resp = await homeTrending.getMoviesByName("movie/day?language=en-US");
    setTrendData(resp.results);
  }

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div>
      <div className="sectOne">
        <div className="texts">
          <h2>Welcome.</h2>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <div className="search">
            <input
              type="search"
              placeholder="Search for a movie, tv show, person......"
              name=""
              id=""
            />
            <button>Search</button>
          </div>
        </div>
        <div className="oscars">
          <img src={Oscar} alt="" />
          <button>View the winners →</button>
        </div>
      </div>
      <div className="trendingMovies">
        <div className="trendingMoviesToggle">
          <h2>Trending</h2>
          <ToggleButton />
        </div>

        <div className="homeCardWrapper">
          {trendData.map((item, index) => {
            return (
              <div className="card" key={index}>
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
