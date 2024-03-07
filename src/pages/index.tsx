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

  const [trendingMovie, setTrendingMovie] = useState<any[]>([]);

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

  const [horrorMovie, setHorrorMovie] = useState<any[]>([]);

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

  const [comedyMovie, setComedyMovie] = useState<any[]>([]);

  useEffect(() => {
    if (comedyData) {
      setComedyMovie(comedyData.results);
    }
  }, [comedyData]);

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + (error.message as string);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-700">
      <MovieHighlight />
      <div className="relative">
        <div className="mx-auto flex max-w-4xl flex-col p-4">
          <MovieCategory data={trendingMovie} genre="Trending" />
          <MovieCategory data={horrorMovie} genre="Horror" />
          {trendingMovie.length > 0 ? (
            <MovieBanner data={trendingMovie[0]} />
          ) : null}

          <MovieCategory data={comedyMovie} genre="Comedy" />
          {horrorMovie.length > 0 ? (
            <MovieBanner data={horrorMovie[1]} />
          ) : null}
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
