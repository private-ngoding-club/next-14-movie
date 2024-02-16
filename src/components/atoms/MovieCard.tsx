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
      <div className="w-48 rounded-xl overflow-hidden">
        <Image
          src={imgUrl}
          width={320}
          height={400}
          alt="Movie picture"
          className="bg-slate-300"
        />
      </div>
      <div className="text-right text-white text-lg">
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
