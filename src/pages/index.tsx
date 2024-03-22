import MovieBanner from "@/components/organisms/MovieBanner";
import MovieCategory from "@/components/organisms/MovieCategory";
import MovieHighlight from "@/components/organisms/MovieHighlight";
import { ReactElement, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Gradient from "@/components/organisms/Gradient";
import MainLayout from "@/components/templates/MainLayout";
import { NextPageWithLayout } from "./_app";
import { options } from "@/library/query";

const Home: NextPageWithLayout = () => {
  // TODO : Fetching MovieHighlight
  // TODO : Fetching MovieBanner
  // TODO : Add Skeleton Loader For Each Fetching Component

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

  return (
    <main className="min-h-screen overflow-hidden bg-slate-700">
      {isPending ? (
        <div className="flex h-[500px] flex-col items-end justify-end gap-y-4 bg-slate-600 p-10">
          <div className="h-8 w-52 animate-pulse rounded-md bg-slate-300"></div>
          <div className="h-20 w-80 animate-pulse rounded-md bg-slate-300"></div>
          <div className="h-10 w-52 animate-pulse rounded-md bg-slate-500"></div>
        </div>
      ) : trendingMovie.length > 0 ? (
        <MovieHighlight data={trendingMovie[1]} />
      ) : null}

      <div className="relative">
        <div className="mx-auto flex max-w-4xl flex-col p-4">
          <MovieCategory genre="trending" />
          <MovieCategory genre="horror" />

          {trendingMovie.length > 0 ? (
            <MovieBanner data={trendingMovie[0]} />
          ) : null}

          <MovieCategory genre="comedy" />
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
