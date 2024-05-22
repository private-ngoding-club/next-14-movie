import { useContext, useEffect, useMemo, useState } from "react";
import { Auth } from "@/provider/auth";
import { toast } from "react-toastify";
import MovieCard from "../molecules/MovieCard";
import Button from "../atoms/Button";
import { useUserData } from "@/hooks/useUserData";

const FavouriteGrid = ({ movieGrid, onRefresh }) => {
  const { user, setUser } = useContext(Auth);
  const { modifyUser } = useUserData();

  const handleClickRemoveAllFromFavourite = () => {
    if (user) {
      setUser((previousUserValue) => ({
        ...previousUserValue,
        favourite: [],
      }));
      const updatedUser = { ...user, favourite: [] };
      modifyUser(updatedUser);
      localStorage.setItem("loggedUser", JSON.stringify(updatedUser));

      toast(`Movie Favourite Cleared!`);
    }
  };

  const handleClickRefresh = () => {
    onRefresh();
    toast(`Movie Favourite Refreshed!`);
  };

  return (
    <main className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mb-8 space-x-3 space-y-3 text-center text-3xl font-bold text-white">
        <h1>Your Favorite Movies</h1>
        <Button
          text="CLEAR"
          onClick={handleClickRemoveAllFromFavourite}
          primary={false}
        />
        <Button text="&#8635;" onClick={handleClickRefresh} primary={false} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movieGrid?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </main>
  );
};

export default FavouriteGrid;
