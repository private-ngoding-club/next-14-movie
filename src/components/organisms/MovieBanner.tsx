import Image from "next/image";
import Button from "../atoms/Button";

const MovieBanner = ({ data }) => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-red-500">
      <div className="h-full w-full">
        <Image
          alt="Movie Banner"
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          width={400}
          height={300}
          className="h-full w-full bg-slate-300 object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 flex justify-end space-x-6 bg-gradient-to-r from-transparent to-red-500 p-14">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">{data.title}</h3>
          <p className="font-medium text-white">{data.overview}</p>
          <Button text="Klik Disini" />
        </div>

        <div className="w-full min-w-48 overflow-hidden rounded-xl">
          <Image
            alt="Movie Banner Card"
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
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
