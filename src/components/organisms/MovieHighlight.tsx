import React, { useEffect, useState } from "react";
import Title from "../atoms/text/Title";
import Button from "../atoms/Button";
import Subtitle from "../atoms/text/Subtitle";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { options } from "@/library/query";


const MovieHighlight = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => {
      setIsLoading(false); // Once data is fetched, set isLoading to false
    }, 5000); // Adjust the delay as needed
  }, []);

  const { data: trendingData } = useQuery({
    queryKey: ["popular"],
    queryFn: () =>
      fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      ).then((res) => res.json()),
  });

  const [trendingMovie, setTrendingMovie] = useState<any>(null);

  useEffect(() => {
    if (trendingData && trendingData.results.length > 0) {
      const randomIndex = Math.floor(
        Math.random() * trendingData.results.length
      );
      setTrendingMovie(trendingData.results[randomIndex]);
    }
  }, [trendingData]);

  const router = useRouter();
  const handleOnClick = () => {
    router.push(`/movie/${trendingMovie.id}`);
  };
  if (!trendingMovie) return null;

  return (
    <>
      {isLoading ? (
        <div className="flex h-[500px] flex-col items-end justify-end gap-y-4 bg-slate-600 p-10">
          <div className="h-8 w-52 animate-pulse rounded-md bg-slate-300"></div>
          <div className="h-20 w-80 animate-pulse rounded-md bg-slate-300"></div>
          <div className="h-10 w-52 animate-pulse rounded-md bg-slate-500"></div>
        </div>
      ) : (
        <div className="relative h-[500px] w-full overflow-hidden bg-red-500 ">
          <div className="h-full w-full">
            <Image
              alt="Movie Highlight"
              src={
                `https://image.tmdb.org/t/p/original/${trendingMovie.backdrop_path}` ||
                ""
              }
              width={400}
              height={300}
              className="center h-full w-full bg-slate-300 object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 mt-auto flex w-full justify-end bg-gradient-to-b from-transparent to-black p-14 text-right text-white">
            <div className="w-[500px] space-y-4">
              <Title judul={trendingMovie.title} className="text-5xl" />
              <Subtitle text={trendingMovie.overview} />
              <Button text="Tekan Disini" primary onClick={handleOnClick} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default MovieHighlight;
