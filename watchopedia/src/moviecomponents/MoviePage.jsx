import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import { useState } from "react";

const MoviePage = () => {
  const [movieState, setMovieState] = useState(() => {
    return { MovieList: ["Die Hard", "Harry Potter"] };
  });

  function HandleAddMovie(newMovie) {
    setMovieState((prevState) => {
      return {
        ...prevState,
        movieList: prevState.MovieList.concat([newMovie]),
      };
    });
  }

  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie HandleAddMovie={HandleAddMovie}></AddMovie>
      <MovieList movieList={movieState.MovieList}></MovieList>
    </div>
  );
};

export default MoviePage;
