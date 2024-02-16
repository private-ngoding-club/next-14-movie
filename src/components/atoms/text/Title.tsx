const Title = ({ judul = "Placeholder", className = "" }) => {
  return <h1 className={`font-bold ${className}`}>{judul}</h1>;
};

export default Title;
