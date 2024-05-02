"use client";

import MovieCard from "@/components/molecules/MovieCard";
import MovieList from "@/components/molecules/MovieList";
import FavouriteGrid from "@/components/organisms/FavouriteGrid";
import Gradient from "@/components/organisms/Gradient";
import { options } from "@/library/query";
import { Auth } from "@/provider/auth";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";



const WishlishPage = () => {
  const { user } = useContext(Auth);

  const { data } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const movies = await Promise.all(
        user.favourite.map((movieId) =>
          fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options).then(
            (res) => res.json()
          )
        )
      );
      return movies;
    },
  });

  return (
    <>
      <main className="relative min-h-screen bg-slate-700">
        <FavouriteGrid movieGrid={data} />
        <Gradient />
      </main>
    </>
  );
};

export default WishlishPage;
