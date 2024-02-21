const Footer = () => {
  const thisYear = new Date();

  return (
    <footer className="bg-red-800 text-center text-white">
      <p>© {thisYear.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
