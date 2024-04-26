"use client";

import DetailContainer from "@/components/organisms/DetailContainer";
import MovieHighlight from "@/components/organisms/MovieHighlight";
import Gradient from "@/components/organisms/Gradient";
import { useQuery } from "@tanstack/react-query";
import { options } from "@/library/query";
import MovieCategory from "@/components/organisms/MovieCategory";

const Page = ({ params }: { params: { movie: string } }) => {
  const { data } = useQuery({
    queryKey: [params.movie],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${params.movie}?language=en-US`,
        options
      ).then((res) => res.json()),
  });

  return (
    <main className="min-h-screen overflow-hidden bg-slate-700">
      <MovieHighlight isEnabled={false} dataHighlight={data} />
      <div className="relative mx-auto flex w-full flex-col py-6 text-center">
        <DetailContainer movie={data} />
        <MovieCategory genre="recomended" />
        <Gradient />
      </div>
    </main>
  );
};

export default Page;
