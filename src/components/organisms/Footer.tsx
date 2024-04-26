const Footer = () => {
  const thisYear = new Date();

  return (
    <footer className="bg-slate-950 text-center text-white">
      <p>© {thisYear.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
