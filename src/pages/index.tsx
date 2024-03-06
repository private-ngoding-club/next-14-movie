import MovieBanner from "@/components/organisms/MovieBanner";
import MovieCategory from "@/components/organisms/MovieCategory";
import MovieHighlight from "@/components/organisms/MovieHighlight";
import { ReactElement, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Gradient from "@/components/organisms/Gradient";
import MainLayout from "@/components/templates/MainLayout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
    },
  };

  const {
    isPending,
    error,
    data: trendingData,
  } = useQuery({
    queryKey: ["popular"],
    queryFn: () =>
      fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      ).then((res) => res.json()),
  });

  const [trendingMovie, setTrendingMovie] = useState<[]>([]);

  useEffect(() => {
    if (trendingData) {
      setTrendingMovie(trendingData.results);
    }
  }, [trendingData]);

  const { data: horrorData } = useQuery({
    queryKey: ["horror"],
    queryFn: () =>
      fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27",
        options
      ).then((res) => res.json()),
  });

  const [horrorMovie, setHorrorMovie] = useState<[]>([]);

  useEffect(() => {
    if (horrorData) {
      setHorrorMovie(horrorData.results);
    }
  }, [horrorData]);

  const { data: comedyData } = useQuery({
    queryKey: ["comedy"],
    queryFn: () =>
      fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35",
        options
      ).then((res) => res.json()),
  });

  const [comedyMovie, setComedyMovie] = useState<[]>([]);

  useEffect(() => {
    if (comedyData) {
      setComedyMovie(comedyData.results);
    }
  }, [comedyData]);

  useEffect(() => {
    console.log(comedyData.results);
  }, [comedyData.results]);

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
    <main className="min-h-screen overflow-auto bg-slate-700">
      <MovieHighlight />
      <div className="relative">
        <div className="mx-auto flex max-w-4xl flex-col p-4">
          <MovieCategory data={trendingMovie} genre="Trending" />
          <MovieCategory data={horrorMovie} genre="Horror" />
          <MovieBanner data={trendingMovie} />
          <MovieCategory data={comedyMovie} genre="Comedy" />
          <MovieBanner data={horrorMovie} />
        </div>
        <Gradient />
      </div>
    </main>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
