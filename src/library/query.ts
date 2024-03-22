import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
  },
};
