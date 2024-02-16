import Image from "next/image";
import Title from "../atoms/text/Title";
import Button from "../atoms/Button";

const MovieBanner = ({ data }) => {
  return (
    <div className="h-[400px] overflow-hidden rounded-xl bg-red-500 relative w-full">
      <div className="w-full h-full">
        <Image
          alt="Movie Banner"
          src="/images/movie-banner.jpg"
          width={400}
          height={300}
          className="w-full h-full bg-slate-300 object-cover"
        />
      </div>
      <div className="space-x-6 justify-end bg-gradient-to-r from-transparent to-red-500 flex p-14 absolute left-0 right-0 top-0 bottom-0">
        <div>
          <h1 className="text-white">{data.title}</h1>
          <Title judul={data.title} />
          <p className="text-white">{data.subtitle}</p>
          <p>Description</p>
          <Button text="Klik Disini" />
        </div>

        <div className="rounded-xl overflow-hidden">
          <Image
            alt="Movie Banner Card"
            src="/images/image.png"
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
