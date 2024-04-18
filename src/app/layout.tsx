import { Metadata } from "next";
import AuthProvider from "@/provider/auth";
import TanstackProvider from "@/provider/tanstack";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Movie App",
  description: "Movie App description",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <AuthProvider>{children}</AuthProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
