import MovieCard from "../atoms/MovieCard";

const MovieList = ({ movieList }) => {
  return (
    <div className="flex gap-10 overflow-auto">
      {movieList.map((movie) => (
        <MovieCard key={movie.id} film={movie} />
      ))}
    </div>
  );
};

export default MovieList;
