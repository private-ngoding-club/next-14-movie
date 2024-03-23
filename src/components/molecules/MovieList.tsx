import MovieCard from "../atoms/MovieCard";

const MovieList = ({ movieList }) => {
  return (
    <div className="flex snap-x snap-mandatory snap-always space-x-4 overflow-x-scroll pb-2 scrollbar scrollbar-track-slate-300 scrollbar-thumb-slate-700 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
      {movieList?.map((movie) => <MovieCard key={movie.id} film={movie} />)}
    </div>
  );
};

export default MovieList;
