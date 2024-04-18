import Title from "../atoms/text/Title";
import Subtitle from "../atoms/text/Subtitle";
import { BsFillSuitHeartFill } from "react-icons/bs";

// TODO : Layout DetailContainer
// TODO : Mainin State Wishlist

const DetailContainer = ({ judul }) => {
  return (
    <div>
      <Title judul="Masukin angka" />
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
