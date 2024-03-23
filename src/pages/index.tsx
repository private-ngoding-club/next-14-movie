import MovieBanner from "@/components/organisms/MovieBanner";
import MovieCategory from "@/components/organisms/MovieCategory";
import MovieHighlight from "@/components/organisms/MovieHighlight";
import { ReactElement } from "react";
import Gradient from "@/components/organisms/Gradient";
import MainLayout from "@/components/templates/MainLayout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  // TODO : Fetching MovieHighlight (Half Done)
  // TODO : Fetching MovieBanner (Done)
  // TODO : Add Skeleton Loader For Each Fetching Component

  return (
    <main className="min-h-screen overflow-hidden bg-slate-700">
      <MovieHighlight />

      <div className="relative">
        <div className="mx-auto flex max-w-4xl flex-col p-4">
          <MovieCategory genre="Trending" />
          <MovieCategory genre="Horror" />

          <MovieBanner genre="horror" />

          <MovieCategory genre="Comedy" />

          <MovieBanner genre="comedy" />
        </div>
        <Gradient />
      </div>
    </main>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
