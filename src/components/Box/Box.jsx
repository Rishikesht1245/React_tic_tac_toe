import "./box.css";
const Box = ({ value, key, onClick }) => {
  return (
    <button
      //x or o
      className={`box ${value === "X" ? "x" : "o"}`}
      onClick={() => onClick(key)}
    >
      {value}
    </button>
  );
};
export default Box;
