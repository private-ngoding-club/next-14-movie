import { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import DetailContainer from "@/components/organisms/DetailContainer";
import MainLayout from "@/components/templates/MainLayout";
import MovieHighlight from "@/components/organisms/MovieHighlight";
import Gradient from "@/components/organisms/Gradient";

// TODO : Fetching detail page by Movie ID
// TODO : Passing data to movie highlight
// TODO : Passing data to detail component

const MovieDetail = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.movie);
  }, [router]);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-700">
      <MovieHighlight isEnabled={false} />
      <div className="relative mx-auto flex w-full flex-col text-center">
        <DetailContainer />
        <Gradient />
      </div>
    </main>
  );
};

export default MovieDetail;

MovieDetail.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
