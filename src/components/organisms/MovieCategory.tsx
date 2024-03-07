import Title from "../atoms/text/Title";
import MovieList from "../molecules/MovieList";

const MovieCategory = ({ genre, data }) => {
  return (
    <>
      <Title judul={genre} />
      <div className="-mx-[250px] mt-2 px-4">
        <MovieList movieList={data} />;
      </div>
    </>
  );
};

export default MovieCategory;
