import { queryClient } from "@/library/query";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";

import "@/styles/globals.css";
import { NextPage } from "next";
import { ReactElement, ReactNode, useState } from "react";
import VisitContext from "@/context/visitNumber";
import Auth from "@/context/auth";
import "react-loading-skeleton/dist/skeleton.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [visitCounter, setVisitCounter] = useState<number>(1);
  const getLayout = Component.getLayout ?? ((page) => page);
  const [user, setUser] = useState<{
    id: string;
    username: string;
    password: string;
    favourite: string[];
  } | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <Auth.Provider value={{ user, setUser }}>
        <VisitContext.Provider value={{ visitCounter, setVisitCounter }}>
          {getLayout(<Component {...pageProps} />)}
        </VisitContext.Provider>
      </Auth.Provider>
    </QueryClientProvider>
  );
}
