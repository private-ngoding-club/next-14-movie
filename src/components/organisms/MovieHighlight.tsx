import React from "react";
import Title from "../atoms/text/Title";
import Button from "../atoms/Button";
import Subtitle from "../atoms/text/Subtitle";

const MovieHighlight = () => {
  return (
    <div className="flex w-full text-white text-right min-h-64 rounded-lg bg-[url('/images/movie-banner.jpg')] bg-center bg-cover bg-no-repeat ">
      <div className="mt-auto w-full m-6 space-y-2">
        <Title judul="Highlight" />
        <Subtitle />
        <Button text="Tekan Disini" primary />
        <Subtitle />
      </div>
    </div>
  );
};

export default MovieHighlight;
