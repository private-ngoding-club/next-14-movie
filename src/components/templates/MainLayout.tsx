import Footer from "../organisms/Footer";
import NavBar from "../organisms/NavBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
