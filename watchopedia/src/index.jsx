import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Counter from "./Counter";
import MoviePage from "./moviecomponents/MoviePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <div className="m-2 p-2 row text-center">
      <Counter></Counter>
      <MoviePage></MoviePage>
    </div>
  </React.StrictMode>
);
