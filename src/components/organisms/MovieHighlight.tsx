"use client";

import { useEffect, useState } from "react";
import Title from "../atoms/text/Title";
import Button from "../atoms/Button";
import Subtitle from "../atoms/text/Subtitle";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { options } from "@/library/query";

const MovieHighlight = ({ isEnabled = true, dataHighlight = null }) => {
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ["popular"],
    enabled: isEnabled,
    queryFn: () =>
      fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      ).then((res) => res.json()),
  });

  const [trendingMovie, setTrendingMovie] = useState<any>(null);

  const handleOnClick = () => {
    router.push(`/movie/${trendingMovie?.id}`);
  };

  useEffect(() => {
    if (isEnabled) {
      if (data && data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setTrendingMovie(data.results[randomIndex]);
      }
    }
  }, [data, isEnabled]);

  useEffect(() => {
    if (!isEnabled) {
      if (dataHighlight) {
        setTrendingMovie(dataHighlight);
      }
    }
  }, [dataHighlight, isEnabled]);

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
                `https://image.tmdb.org/t/p/original/${trendingMovie?.backdrop_path}` ||
                ""
              }
              width={400}
              height={300}
              className="center h-full w-full bg-slate-300 object-cover"
            />
          </div>

          {isEnabled ? (
            <div className="absolute bottom-0 left-0 mt-auto flex w-full justify-end bg-gradient-to-b from-transparent to-black p-14 text-right text-white">
              <div className="w-[500px] space-y-4">
                <Title judul={trendingMovie?.title} className="text-5xl" />
                <Subtitle text={trendingMovie?.overview} />
                <Button text="Tekan Disini" primary onClick={handleOnClick} />
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};
export default MovieHighlight;
