"use client";

import { queryClient } from "@/library/query";
import { QueryClientProvider } from "@tanstack/react-query";

const TanstackProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
