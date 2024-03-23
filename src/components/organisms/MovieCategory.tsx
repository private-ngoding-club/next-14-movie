import { useQuery } from "@tanstack/react-query";
import Title from "../atoms/text/Title";
import MovieList from "../molecules/MovieList";
import { options } from "@/library/query";

const MovieCategory = ({ genre }) => {
  const genreId = genre === "horror" ? 27 : genre === "comedy" ? 35 : "";

  const fetchingURL =
    genre === "trending"
      ? "movie/popular?language=en-US&page=1"
      : `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`;

  const { data: movieData } = useQuery({
    queryKey: [genre],
    queryFn: () =>
      fetch(`https://api.themoviedb.org/3/${fetchingURL}`, options).then(
        (res) => res.json()
      ),
  });

  if (!movieData) return null;

  return (
    <>
      <Title
        judul={genre}
        className="my-2 rounded-md bg-slate-900 text-center text-lg text-white"
      />
      <div className="-mx-[250px] mt-2 px-4">
        <MovieList movieList={movieData.results} />;
      </div>
    </>
  );
};

export default MovieCategory;
