import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [queryParameters] = useSearchParams();
  const searchQuery = queryParameters.get("query")

  const [searchData, setSearch] = useState([])

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjQxMWVlNzkzNzNhYmU3OWRiNGRiYTNmZjkzYTJkZCIsInN1YiI6IjY2NTAxOTI1YmMyMjhiZWI5MjA2ODU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XM9Ycvg4HIOfMbqZ6SzAv7fkC-pPDfRSRw9wpvZqB24",
      },
    };

    axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => setSearch(response.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      This is search page
      <h1>{queryParameters.get("query")}</h1>
      {
        searchData.map((movie) => {
          return <h2>{movie.title}</h2>
        })
      }
    </div>
  );
}

export default SearchPage;
