import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { BsStarFill } from "react-icons/bs";

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

  return (
    <>
      <div className="w-full max-w-48 snap-start">
        <Link href={`/movie/${id}`}>
          <div className="h-[250px] w-full overflow-hidden rounded-xl">
            <Image
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              width={320}
              height={600}
              alt="Movie picture"
              className="h-full bg-slate-300 object-cover"
              style={{
                width: "100%",
                height: "100%",
              }}
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
