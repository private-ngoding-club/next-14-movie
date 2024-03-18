import { ReactElement, useContext } from "react";
import { useRouter } from "next/router";
import Button from "@/components/atoms/Button";
import DetailContainer from "@/components/organisms/DetailContainer";
import MainLayout from "@/components/templates/MainLayout";
import VisitContext from "@/context/visitNumber";
import MovieHighlight from "@/components/organisms/MovieHighlight";
import Gradient from "@/components/organisms/Gradient";

const MovieDetail = () => {
  const router = useRouter();
  const { setVisitCounter } = useContext(VisitContext);

  const handleOnClick = () => {
    // merubah numberCounter
    setVisitCounter((previous) => (previous += 1));
  };

  return (
    <main className="min-h-screen overflow-hidden bg-slate-700">
      <MovieHighlight data="" />
      <div className="relative mx-auto flex w-full flex-col text-center">
        <Button text="Increase Number" onClick={handleOnClick} />
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
