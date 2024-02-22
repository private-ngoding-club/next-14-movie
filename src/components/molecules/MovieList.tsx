import MovieCard from "../atoms/MovieCard";

const MovieList = ({ movieList }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto">
      {movieList.map((movie) => (
        <MovieCard key={movie.id} film={movie} />
      ))}
    </div>
  );
};

export default MovieList;
