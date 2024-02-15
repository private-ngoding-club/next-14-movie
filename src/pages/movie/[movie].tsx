import Title from "@/components/atoms/text/Title";
import { useRouter } from "next/router";

const MovieDetail = () => {
  const router = useRouter();

  return (
    <div className="p-24">
      <Title judul="Masukin" />
      <Title judul="Beda lagi" />

      <h2>{router.query.movie}</h2>
    </div>
  );
};

export default MovieDetail;
