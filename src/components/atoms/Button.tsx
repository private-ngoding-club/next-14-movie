// TODO : add clear option

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
      className={`cursor-pointer rounded-full px-8 py-2 text-white ${primaryClassName} ${customStyles} `}
    >
      {text}
    </button>
  );
};

export default Button;
