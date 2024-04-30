"use client";

import { BsCalendar, BsHeartFill, BsStarFill } from "react-icons/bs";
import Image from "next/image";
import { useMemo } from "react";

// TODO : Mainin State Wishlist

const DetailContainer = ({ movie }) => {
  const roundedVote = useMemo(
    () => Math.round(movie?.vote_average),
    [movie?.vote_average]
  );

  return (
    <>
      <div>
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4">
          <div
            className="bg-card text-card-foreground rounded-lg border shadow-sm"
            data-v0-t="card"
          >
            <div className="grid gap-4 p-4 md:gap-6 md:p-6 lg:gap-4">
              <div className="flex items-start gap-4">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  alt="Movie Cover"
                  width={200}
                  height={400}
                  className="priority h-full rounded-lg border border-gray-200 bg-slate-300 object-cover dark:border-gray-800"
                />
                <div className="grid gap-2">
                  <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold">{movie?.title}</h1>
                    <button className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                      <BsHeartFill className="text-red-500" />
                      Add to Wishlist
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <BsCalendar />
                    <p>{movie?.release_date}</p>
                  </div>
                  <div className="flex items-center justify-start space-x-1">
                    {new Array(10).fill(0).map((item, index) => (
                      <BsStarFill
                        key={index}
                        className={`${
                          index + 1 <= roundedVote
                            ? "text-yellow-500"
                            : "text-gray-500"
                        }`}
                      />
                    ))}
                    <p>{movie?.vote_average}/10</p>
                  </div>
                  <div className="grid gap-4 text-left">
                    <h2 className="text-xl font-bold">Overview</h2>
                    <p>{movie?.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailContainer;
