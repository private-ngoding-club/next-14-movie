import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import DetailContainer from "@/components/organisms/DetailContainer";
import MainLayout from "@/components/templates/MainLayout";
import MovieHighlight from "@/components/organisms/MovieHighlight";
import Gradient from "@/components/organisms/Gradient";
import { useQuery } from "@tanstack/react-query";
import { options } from "@/library/query";

// TODO : Fetching detail page by Movie ID (Done)
// TODO : Passing data to movie highlight (Done)
// TODO : Passing data to detail component (Done)

const MovieDetail = () => {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: [router.query.movie],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${router.query.movie}?language=en-US`,
        options
      ).then((res) => res.json()),
  });

  const [highlightMovie, setHighlightMovie] = useState<any>([]);

  useEffect(() => {
    setHighlightMovie(data);
  }, [data]);

  useEffect(() => {
    console.log(router.query.movie);
  }, [router]);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-700">
      <MovieHighlight isEnabled={false} dataHighlight={highlightMovie} />
      <div className="relative mx-auto flex w-full flex-col text-center">
        <DetailContainer judul={highlightMovie} />
        <Gradient />
      </div>
    </main>
  );
};

export default MovieDetail;

MovieDetail.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
