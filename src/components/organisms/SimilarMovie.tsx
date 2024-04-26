import Image from "next/image";
import React from "react";

const SimilarMovie = () => {
  return (
    <div
      className="bg-card text-card-foreground rounded-lg border shadow-sm"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 p-4">
        <h2 className="text-lg font-bold">Similar Movies</h2>
      </div>
      <div className="p-4">
        <div className="grid gap-4 md:gap-6">
          <div className="flex items-start gap-4">
            <Image
              src="/placeholder.svg"
              alt="Movie Cover"
              width="100"
              height="150"
              className="w-25 aspect-[1/1] rounded-lg border border-gray-200 object-cover dark:border-gray-800"
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">The Dark Knight</h3>
              <p className="text-muted-foreground dark:text-muted-foreground-variant text-sm">
                2008 · 2h 32m
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Image
              src="/placeholder.svg"
              alt="Movie Cover"
              width="100"
              height="150"
              className="w-25 aspect-[1/1] rounded-lg border border-gray-200 object-cover dark:border-gray-800"
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Interstellar</h3>
              <p className="text-muted-foreground dark:text-muted-foreground-variant text-sm">
                2014 · 2h 49m
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Image
              src="/placeholder.svg"
              alt="Movie Cover"
              width="100"
              height="150"
              className="w-25 aspect-[1/1] rounded-lg border border-gray-200 object-cover dark:border-gray-800"
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Shutter Island</h3>
              <p className="text-muted-foreground dark:text-muted-foreground-variant text-sm">
                2010 · 2h 19m
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarMovie;
