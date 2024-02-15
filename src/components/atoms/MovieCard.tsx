import Image from "next/image";

const MovieCard = ({ film }) => {
  return (
    <div>
      <div className="rounded-xl overflow-hidden">
        <Image
          src="/images/image.png"
          width={320}
          height={400}
          alt="Movie picture"
          className="bg-slate-300"
        />
      </div>
      <div className="text-right text-white text-lg">
        <p>{film.title}</p>
        <p>{film.subtitle}</p>
      </div>
    </div>
  );
};

export default MovieCard;
