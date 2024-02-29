import { useContext } from "react";
import Title from "../atoms/text/Title";
import VisitContext from "@/context/visitNumber";

const DetailContainer = () => {
  const { visitCounter } = useContext(VisitContext);

  return (
    <div>
      <Title judul="Masukin angka" />
      <h2>{visitCounter}</h2>
    </div>
  );
};

export default DetailContainer;
