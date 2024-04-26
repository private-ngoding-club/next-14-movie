// "use client";

// import { useQuery } from "@tanstack/react-query";
import Title from "../atoms/text/Title";
import MovieList from "../molecules/MovieList";
import { options } from "@/library/query";
import SkeletonMovieList from "../molecules/skeleton/SkeletonMovieList";
import { memo } from "react";

async function getData(fetchingURL: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${fetchingURL}`,
    options
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const MovieCategory = async ({ genre }) => {
  const genreId = genre === "horror" ? 27 : genre === "comedy" ? 35 : "";

  const fetchingURL =
    genre === "trending" || "recomended"
      ? "movie/popular?language=en-US&page=1"
      : `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`;

  // const { data, isLoading } = useQuery({
  //   queryKey: [genre],
  //   queryFn: () =>
  //     fetch(`https://api.themoviedb.org/3/${fetchingURL}`, options).then(
  //       (res) => res.json()
  //     ),
  // });

  const data = await getData(fetchingURL);
  const isLoading = false;

  return (
    <>
      <Title
        judul={genre}
        className="my-2 rounded-md bg-slate-900 text-center text-lg capitalize text-white"
      />
      <div className="-mx-[250px] mt-2 px-4">
        {isLoading ? (
          <SkeletonMovieList />
        ) : (
          <MovieList movieList={data.results} />
        )}
      </div>
    </>
  );
};

export default memo(MovieCategory);
