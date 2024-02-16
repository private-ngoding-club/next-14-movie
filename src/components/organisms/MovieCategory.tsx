import Title from "../atoms/text/Title";
import MovieList from "../molecules/MovieList";

const MovieCategory = ({ genre, data }) => {
  return (
    <>
      <Title judul={genre} />
      <MovieList movieList={data} />;
    </>
  );
};

export default MovieCategory;
