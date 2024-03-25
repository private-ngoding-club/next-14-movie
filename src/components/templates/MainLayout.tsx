import Head from "next/head";
import Footer from "../organisms/Footer";
import NavBar from "../organisms/NavBar";

const MainLayout = ({ children, title = "Movie App" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Movie App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
