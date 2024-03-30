import { useContext } from "react";
import Title from "../atoms/text/Title";
import VisitContext from "@/context/visitNumber";
import Subtitle from "../atoms/text/Subtitle";
import { BsFillHeartPulseFill, BsFillSuitHeartFill } from "react-icons/bs";

// TODO : Layout DetailContainer
// TODO : Mainin State Wishlist

const DetailContainer = ({ judul }) => {
  const { visitCounter } = useContext(VisitContext);

  return (
    <div>
      <Title judul="Masukin angka" />
      <h2>{visitCounter}</h2>
      <Title judul={judul?.title} />
      <Subtitle text={judul?.overview} />
      <BsFillSuitHeartFill
        className="animate-pulse text-yellow-600"
        size={300}
      />
    </div>
  );
};

export default DetailContainer;
