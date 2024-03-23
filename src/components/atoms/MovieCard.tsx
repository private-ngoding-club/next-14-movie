import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieCard = ({
  film,
}: {
  film: {
    id: string;
    poster_path: string;
    title: string;
    overview: string;
    vote_average: number;
  };
}) => {
  const { id, poster_path, title, overview, vote_average } = film;

  const roundedVote = useMemo(() => Math.round(vote_average), [vote_average]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  return (
    <>
      <div className="w-full max-w-48 snap-start">
        {isLoading ? (
          <>
            <Skeleton
              height={250}
              width={190}
              highlightColor="#334155"
              borderRadius="0.75rem"
            />
            <Skeleton
              count={2}
              width={190}
              highlightColor="#334155"
              borderRadius="0.75rem"
            />
          </>
        ) : (
          <>
            <Link href={`/movie/${id}`}>
              <div className="h-[250px] w-full overflow-hidden rounded-xl">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  width={320}
                  height={600}
                  alt="Movie picture"
                  className="h-full bg-slate-300 object-cover"
                />
              </div>
            </Link>
            <div className="mt-1 text-right text-lg text-white">
              <div className="flex items-center justify-end space-x-1">
                {new Array(10).fill(0).map((item, index) => (
                  <BsStarFill
                    key={index}
                    className={`${
                      index + 1 <= roundedVote
                        ? "text-yellow-500"
                        : "text-gray-500"
                    }`}
                  />
                ))}
              </div>
              <p className="font-medium">{title}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MovieCard;
