import SkeletonMovieCard from "./SkeletonMovieCard";

const SkeletonMovieList = () => {
  return (
    <div className="flex space-x-4 overflow-x-scroll pb-2 scrollbar scrollbar-track-slate-300 scrollbar-thumb-slate-700 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
      {[...Array(10)].map((_, index) => (
        <SkeletonMovieCard key={index} />
      ))}
    </div>
  );
};

export default SkeletonMovieList;
