import MovieBanner from "@/components/organisms/MovieBanner";
import MovieCategory from "@/components/organisms/MovieCategory";
import MovieHighlight from "@/components/organisms/MovieHighlight";
import NavBar from "@/components/organisms/NavBar";
import Footer from "@/components/organisms/Footer";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Gradient from "@/components/organisms/Gradient";

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/TanStack/query").then((res) =>
        res.json()
      ),
  });

  useEffect(() => {
    console.log({ data });
  }, [data]);

  const trendingMovieList = [
    {
      id: "1234-4213-1234",
      imgUrl:
        "https://media.suara.com/pictures/653x366/2024/02/21/39056-ahy.jpg",
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
    {
      id: "3333-4213-3242",
      imgUrl: "",
      title: "Judul Film 4",
      subtitle: "test",
      rating: 0,
    },
    {
      id: "4123-4213-3242",
      imgUrl: "",
      title: "Judul Film 4",
      subtitle: "test",
      rating: 0,
    },
    {
      id: "3242-2222-3242",
      imgUrl: "",
      title: "Judul Film 4",
      subtitle: "test",
      rating: 0,
    },
    {
      id: "6333-4123-3132",
      imgUrl: "",
      title: "Judul Film 4",
      subtitle: "test",
      rating: 0,
    },
    {
      id: "4124-6786-3242",
      imgUrl: "",
      title: "Judul Film 4",
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

  const comedyMovieList = [
    {
      id: "12039812",
      imgUrl: "",
      title: "Judul Film 1",
      subtitle: "test",
      rating: 0,
    },
    {
      id: "412312312",
      imgUrl: "",
      title: "Judul Film 2",
      subtitle: "test",
      rating: 0,
    },
    {
      id: "37567456",
      imgUrl: "",
      title: "Judul Film 3",
      subtitle: "test",
      rating: 0,
    },
  ];

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + (error.message as string);

  return (
    <>
      <NavBar />
      <main className=" min-h-screen bg-slate-700">
        <MovieHighlight />
        {/* <div className="bg-gradient-to-r from-black via-slate-700 to-black "> */}
        <div className="relative">
          <div className="mx-auto flex max-w-4xl flex-col p-4">
            <MovieCategory data={trendingMovieList} genre="Trending" />
            <MovieCategory data={horrorMovieList} genre="Horror" />
            <MovieBanner data={trendingMovieList[0]} />
            <MovieCategory data={comedyMovieList} genre="Comedy" />
            <MovieBanner data={trendingMovieList[0]} />
          </div>
          <Gradient />
        </div>
        {/* </div> */}
      </main>
      <Footer />
    </>
  );
}
