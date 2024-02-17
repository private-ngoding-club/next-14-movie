const Button = ({ text, primary = false }) => {
  const primaryClassName = primary ? "bg-blue-400" : "bg-red-400";

  return (
    <button
      className={`rounded-full ${primaryClassName} text-white py-4 px-10`}
    >
      {text}
    </button>
  );
};

export default Button;
