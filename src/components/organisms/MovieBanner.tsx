"use client";

import Image from "next/image";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { options } from "@/library/query";
import { useEffect, useState } from "react";

const MovieBanner = ({ genre }) => {
  const genreId = genre === "horror" ? 27 : genre === "comedy" ? 35 : "";

  const fetchingURL = `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`;

  const { data: genreData } = useQuery({
    queryKey: [genre],
    queryFn: () =>
      fetch(`https://api.themoviedb.org/3/${fetchingURL}`, options).then(
        (res) => res.json()
      ),
  });

  const [genreMovie, setGenreMovie] = useState<any>(null);

  useEffect(() => {
    if (genreData && genreData.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * genreData.results.length);
      setGenreMovie(genreData.results[randomIndex]);
    }
  }, [genreData]);

  const router = useRouter();
  const handleOnClick = () => {
    router.push(`/movie/${genreMovie?.id}`);
  };

  return (
    <div className="relative my-4 h-[400px] w-full overflow-hidden rounded-xl bg-red-500">
      <div className="h-full w-full">
        <Image
          alt="Movie Banner"
          src={`https://image.tmdb.org/t/p/original/${genreMovie?.backdrop_path}`}
          width={400}
          height={300}
          className="h-full w-full bg-slate-300 object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 flex justify-end space-x-6 bg-gradient-to-r from-transparent to-red-500 p-14">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">{genreMovie?.title}</h3>
          <p className="font-medium text-white">{genreMovie?.overview}</p>
          <Button text="Klik Disini" onClick={handleOnClick} />
        </div>

        <div className="w-full min-w-48 overflow-hidden rounded-xl">
          <Image
            alt="Movie Banner Card"
            src={`https://image.tmdb.org/t/p/original/${genreMovie?.poster_path}`}
            width={200}
            height={400}
            className="h-full bg-slate-300 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
