import React from "react";
import Title from "../atoms/text/Title";
import Button from "../atoms/Button";
import Subtitle from "../atoms/text/Subtitle";
import Image from "next/image";
import { useRouter } from "next/router";

const MovieHighlight = ({ data }) => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push(`/movie/${data.id}`);
  };
  return (
    <div className="relative h-[500px] w-full overflow-hidden bg-red-500 ">
      <div className="h-full w-full">
        <Image
          alt="Movie Highlight"
          src={
            `https://image.tmdb.org/t/p/original/${data.backdrop_path}` || ""
          }
          width={400}
          height={300}
          className="h-full w-full bg-slate-300 object-fill"
        />
      </div>
      <div className="absolute bottom-0 left-1 mt-auto flex w-full justify-end bg-gradient-to-b from-transparent to-black p-14 text-right text-white">
        <div className="w-[500px] space-y-4">
          <Title judul={data.title} className="text-5xl" />
          <Subtitle text={data.overview} />

          <Button text="Tekan Disini" primary onClick={handleOnClick} />
        </div>
      </div>
    </div>
  );
};

export default MovieHighlight;
