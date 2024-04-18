import { queryClient } from "@/library/query";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";

import "@/styles/globals.css";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import AuthProvider from "@/provider/auth";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    </QueryClientProvider>
  );
}
