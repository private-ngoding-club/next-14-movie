import MovieCard from "../atoms/MovieCard";

const MovieList = ({ movieList }) => {
  return (
    <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 flex snap-x snap-mandatory snap-always space-x-4 overflow-x-scroll pb-2">
      {movieList?.map((movie) => <MovieCard key={movie.id} film={movie} />)}
    </div>
  );
};

export default MovieList;
