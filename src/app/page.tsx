"use client";
import Gradient from "@/components/organisms/Gradient";
import MovieBanner from "@/components/organisms/MovieBanner";
import MovieCategory from "@/components/organisms/MovieCategory";
import MovieHighlight from "@/components/organisms/MovieHighlight";
import { useUserData, User } from "@/hooks/useUserData";
import React, { useEffect } from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-700">
      <MovieHighlight />

      {/* <GoogleButton /> */}

      <div className="relative">
        <div className="mx-auto flex max-w-4xl flex-col p-4">
          <MovieCategory genre="trending" />
          <MovieCategory genre="horror" />

          <MovieBanner genre="horror" />

          <MovieCategory genre="comedy" />

          <MovieBanner genre="comedy" />
        </div>
        <Gradient />
      </div>
    </main>
  );
};

export default HomePage;
