import { ReactElement, useContext } from "react";
import { useRouter } from "next/router";
import Button from "@/components/atoms/Button";
import DetailContainer from "@/components/organisms/DetailContainer";
import MainLayout from "@/components/templates/MainLayout";
import VisitContext from "@/context/visitNumber";

const MovieDetail = () => {
  const router = useRouter();
  const { setVisitCounter } = useContext(VisitContext);

  const handleOnClick = () => {
    // merubah numberCounter
    setVisitCounter((previous) => (previous += 1));
  };

  return (
    <div className="p-24">
      <Button text="Increase Number" onClick={handleOnClick} />
      <DetailContainer />
      <h2>{router.query.movie}</h2>
    </div>
  );
};

export default MovieDetail;

MovieDetail.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
