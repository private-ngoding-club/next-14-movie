import { useContext } from "react";
import Title from "../atoms/text/Title";
import VisitContext from "@/context/visitNumber";

const DetailContainer = () => {
  const { visitCounter } = useContext(VisitContext);

  return (
    <div>
      <Title judul="Masukin angka" />
      <h2>{visitCounter}</h2>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default DetailContainer;
