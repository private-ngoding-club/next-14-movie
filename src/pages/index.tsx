import MovieBanner from "@/components/organisms/MovieBanner";
import MovieCategory from "@/components/organisms/MovieCategory";
import MovieHighlight from "@/components/organisms/MovieHighlight";
import { ReactElement } from "react";
import Gradient from "@/components/organisms/Gradient";
import MainLayout from "@/components/templates/MainLayout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-700">
      <MovieHighlight />

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

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Homepage | Movie App">{page}</MainLayout>;
};

export default Home;
