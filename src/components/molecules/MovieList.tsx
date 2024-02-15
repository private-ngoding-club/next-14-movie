import MovieCard from "../atoms/MovieCard";

const MovieList = () => {
  const movieList = [
    {
      id: 0,
      imgUrl: "",
      title: "Judul Film 1",
      subtitle: "test",
      rating: 0,
    },
    {
      id: 1,
      imgUrl: "",
      title: "Judul Film 2",
      subtitle: "test",
      rating: 0,
    },
    {
      id: 2,
      imgUrl: "",
      title: "Judul Film 3",
      subtitle: "test",
      rating: 0,
    },
  ];

  return (
    <div>
      <h2>MovieList</h2>
      {/* Loop movie card using movieList array */}
      <div className="flex gap-10">
        {movieList.map((data) => (
          <MovieCard key={data.id} film={data} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
