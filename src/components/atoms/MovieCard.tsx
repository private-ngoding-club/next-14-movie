import Image from "next/image";
import Link from "next/link";

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

  return (
    <Link href={`/movie/${id}`}>
      <div className="h-[250px] w-48 overflow-hidden rounded-xl">
        {poster_path !== "" ? (
          <Image
            // https://image.tmdb.org/t/p/original/poster_path
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            width={320}
            height={600}
            alt="Movie picture"
            className="h-full bg-slate-300 object-cover"
          />
        ) : (
          <div className="flex h-64 w-48 items-center justify-center bg-slate-300">
            <p className="text-2xl text-white">No Image</p>
          </div>
        )}
      </div>
      <div className="text-right text-lg text-white">
        <p>{title}</p>
        <p>{overview}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
