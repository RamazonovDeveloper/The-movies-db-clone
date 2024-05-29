import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import DashboardLayout from "./layouts/DashboardLayout";
import Nowplaying from "./pages/Movies/NowPlaying";
import Upcoming from "./pages/Movies/Upcoming";
import TopRated from "./pages/Movies/TopRated";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/now_playing" element={<Nowplaying />} />
        <Route path="/movies/upcoming" element={<Upcoming />} />
        <Route path="/movies/top_rated" element={<TopRated />} />
        <Route path="/person" element={<Home />} />
        <Route path="/tv" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
