

const Button = ({
  text,
  primary = true,
  customStyles = "",
  onClick = () => {},
}) => {
  const primaryClassName = primary
    ? "bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"
    : "bg-transparent border border-blue-500 hover:border-blue-600 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-full";

  return (
    <button
      onClick={onClick}
      className={`${primaryClassName} ${customStyles} `}
    >
      {text}
    </button>
  );
};

export default Button;
