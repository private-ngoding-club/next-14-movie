import { Auth } from "@/provider/auth";
import Image from "next/image";
import Link from "next/link";
import { useContext, useMemo } from "react";
import { BsStarFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { toast } from "react-toastify";

const MovieCard = ({
  movie,
}: {
  movie: {
    id: string;
    poster_path: string;
    title: string;
    overview: string;
    vote_average: number;
  };
}) => {
  const { user, setUser } = useContext(Auth);

  const { id, poster_path, title, vote_average } = movie;

  const handleClickFavourite = () => {
    setUser((previousUserValue) => ({
      ...previousUserValue,
      favourite: [...previousUserValue.favourite, movie?.id],
    }));

    toast(`Movie: ${movie.title} added!`);
  };

  const handleClickRemoveFromFavourite = () => {
    setUser((previousUserValue) => ({
      ...previousUserValue,
      favourite: previousUserValue.favourite.filter(
        (item: string) => item !== movie?.id
      ),
    }));

    toast(`Movie: ${movie.title} removed!`);
  };

  const isMovieFavourite = useMemo(
    () => user?.favourite.includes(movie?.id),
    [user?.favourite, movie?.id]
  );

  const roundedVote = useMemo(() => Math.round(vote_average), [vote_average]);

  return (
    <>
      <div className="relative w-full max-w-48 snap-start">
        {user ? (
          isMovieFavourite ? (
            <button
              onClick={handleClickRemoveFromFavourite}
              className="absolute right-2 top-2"
            >
              <BsHeartFill className="text-red-500" size={30} />
            </button>
          ) : (
            <button
              onClick={handleClickFavourite}
              className="absolute right-2 top-2"
            >
              <BsHeart className="text-red-500" size={30} />
            </button>
          )
        ) : undefined}
        <Link href={`/movie/${id}`}>
          <div className="h-[250px] w-full overflow-hidden rounded-xl">
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original/${poster_path}`
                  : ""
              }
              width={320}
              height={600}
              alt="Movie picture"
              className="h-full bg-slate-300 object-cover"
              style={{
                width: "100%",
                height: "100%",
              }}
              priority
            />
          </div>
        </Link>
        <div className="mt-1 text-right text-lg text-white">
          <div className="flex items-center justify-end space-x-1">
            {new Array(10).fill(0).map((item, index) => (
              <BsStarFill
                key={index}
                className={`${
                  index + 1 <= roundedVote ? "text-yellow-500" : "text-gray-500"
                }`}
              />
            ))}
          </div>
          <p className="font-medium">{title}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
