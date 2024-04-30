import { Metadata } from "next";
import "@/styles/globals.css";
import Providers from "@/components/organisms/Providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
