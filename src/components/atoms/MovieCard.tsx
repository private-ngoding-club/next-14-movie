import Image from "next/image";
import Link from "next/link";

const MovieCard = ({
  film,
}: {
  film: {
    id: string;
    imgUrl: string;
    title: string;
    subtitle: string;
    rating: number;
  };
}) => {
  const { id, imgUrl, title, subtitle, rating } = film;

  return (
    <Link href={`/movie/${id}`}>
      <div className="h-[250px] w-48 overflow-hidden rounded-xl">
        {imgUrl !== "" ? (
          <Image
            src={imgUrl}
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
        <p>{subtitle}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
