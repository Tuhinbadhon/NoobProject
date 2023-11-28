const Badge = ({ text }) => {
  return (
    <span
      className="bg-blue-100 hover:bg-blue-300 text-blue-800 text-xs font-medium px-8 py-2
     rounded"
    >
      {text}
    </span>
  );
};

export default Badge;
