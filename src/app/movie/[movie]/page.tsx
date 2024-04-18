"use client";

import DetailContainer from "@/components/organisms/DetailContainer";
import MovieHighlight from "@/components/organisms/MovieHighlight";
import Gradient from "@/components/organisms/Gradient";
import { useQuery } from "@tanstack/react-query";
import { options } from "@/library/query";
import {
  BsCalendar,
  BsHeartFill,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";

// TODO : Isi Data
// TODO : Layouting

const Page = ({ params }: { params: { movie: string } }) => {
  const { data } = useQuery({
    queryKey: [params.movie],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${params.movie}?language=en-US`,
        options
      ).then((res) => res.json()),
  });

  return (
    <main className="min-h-screen overflow-hidden bg-slate-700">
      <MovieHighlight isEnabled={false} dataHighlight={data} />
      <div className="relative mx-auto flex w-full flex-col text-center">
        <DetailContainer judul={data} />
        <Gradient />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4">
        <div
          className="bg-card text-card-foreground rounded-lg border shadow-sm"
          data-v0-t="card"
        >
          <div className="grid gap-4 p-4 md:gap-6 md:p-6 lg:gap-4">
            <div className="flex items-start gap-4">
              <img
                src="/placeholder.svg"
                alt="Movie Cover"
                width="200"
                height="300"
                className="w-50 aspect-[1/1] rounded-lg border border-gray-200 object-cover dark:border-gray-800"
              />
              <div className="grid gap-2">
                <div className="flex items-center gap-4">
                  <h1 className="text-2xl font-bold">Inception</h1>
                  <button className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    <BsHeartFill className="text-red-500" />
                    Favorite
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <BsCalendar />
                  <p>2010</p>
                </div>
                <div className="flex items-center gap-4">
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarHalf className="text-yellow-500" />
                  <p className="text-muted-foreground dark:text-muted-foreground-variant text-sm">
                    3.5/5 (Votes: 1234)
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <h2 className="text-xl font-bold">Overview</h2>
              <p>
                Dom Cobb is a skilled thief, the absolute best in the dangerous
                art of extraction, stealing valuable secrets from deep within
                the subconscious during the dream state, when the mind is at its
                most vulnerable. Cobb&apos;s rare ability has made him a coveted
                player in this treacherous new world of corporate espionage, but
                it has also made him an international fugitive and cost him
                everything he has ever loved.
              </p>
            </div>
          </div>
        </div>
        <div
          className="bg-card text-card-foreground rounded-lg border shadow-sm"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-4">
            <h2 className="text-lg font-bold">Similar Movies</h2>
          </div>
          <div className="p-4">
            <div className="grid gap-4 md:gap-6">
              <div className="flex items-start gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Movie Cover"
                  width="100"
                  height="150"
                  className="w-25 aspect-[1/1] rounded-lg border border-gray-200 object-cover dark:border-gray-800"
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">The Dark Knight</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground-variant text-sm">
                    2008 · 2h 32m
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Movie Cover"
                  width="100"
                  height="150"
                  className="w-25 aspect-[1/1] rounded-lg border border-gray-200 object-cover dark:border-gray-800"
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Interstellar</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground-variant text-sm">
                    2014 · 2h 49m
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Movie Cover"
                  width="100"
                  height="150"
                  className="w-25 aspect-[1/1] rounded-lg border border-gray-200 object-cover dark:border-gray-800"
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Shutter Island</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground-variant text-sm">
                    2010 · 2h 19m
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
