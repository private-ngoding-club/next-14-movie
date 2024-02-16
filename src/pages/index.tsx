import MovieBanner from "@/components/organisms/MovieBanner";
import MovieCategory from "@/components/organisms/MovieCategory";

export default function Home() {
  const trendingMovieList = [
    {
      id: "1234-4213-1234",
      imgUrl: "",
      title: "Judul Film 1",
      subtitle: "test",
      rating: 0,
    },
    {
      id: "2323-4213-1234",
      imgUrl: "",
      title: "Judul Film 2",
      subtitle: "test",
      rating: 0,
    },
    {
      id: "3333-4213-1234",
      imgUrl: "",
      title: "Judul Film 3",
      subtitle: "test",
      rating: 0,
    },
  ];

  const horrorMovieList = [
    {
      id: "109123",
      imgUrl: "",
      title: "Horror Film 1",
      subtitle: "test",
      rating: 0,
    },
    {
      id: "123",
      imgUrl: "",
      title: "Horror Film 2",
      subtitle: "test",
      rating: 0,
    },
    {
      id: "31232",
      imgUrl: "",
      title: "Horror Film 3",
      subtitle: "test",
      rating: 0,
    },
  ];

  return (
    <main className="bg-slate-700 min-h-screen">
      <div className="m-4">
        <MovieCategory data={trendingMovieList} genre="Trending" />
        <MovieCategory data={horrorMovieList} genre="Horror" />

        <MovieBanner data={trendingMovieList[0]} />
      </div>
    </main>
  );
}
