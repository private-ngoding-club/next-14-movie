const Button = ({
  text,
  primary = false,
  customStyles = "",
  onClick = () => {},
}) => {
  const primaryClassName = primary ? "bg-blue-400" : "bg-red-400";

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-full px-10 py-4 text-white ${primaryClassName} ${customStyles} `}
    >
      {text}
    </button>
  );
};

export default Button;
