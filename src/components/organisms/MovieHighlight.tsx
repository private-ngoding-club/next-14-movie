import React from "react";
import Title from "../atoms/text/Title";
import Button from "../atoms/Button";
import Subtitle from "../atoms/text/Subtitle";

const MovieHighlight = () => {
  return (
    <div className="flex min-h-[400px] w-full rounded-lg bg-[url('/images/movie-banner.jpg')] bg-cover bg-top bg-no-repeat text-right text-white ">
      <div className="m-6 mt-auto w-full space-y-2">
        <Title judul="Highlight" />
        <Subtitle />
        <Button text="Tekan Disini" primary />
        <Subtitle />
      </div>
    </div>
  );
};

export default MovieHighlight;
