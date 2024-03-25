import Skeleton from "react-loading-skeleton";

function SkeletonMovieCard() {
  return (
    <div>
      <Skeleton
        height={250}
        width={190}
        highlightColor="#334155"
        baseColor="#CBD5E1"
        borderRadius="0.75rem"
      />
      <Skeleton
        count={2}
        width={190}
        highlightColor="#334155"
        baseColor="#CBD5E1"
        borderRadius="0.75rem"
      />
    </div>
  );
}

export default SkeletonMovieCard;
