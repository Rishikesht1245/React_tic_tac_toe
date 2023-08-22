import React from "react";
import Box from "../Box/Box";
import "./Board.css";

const Board = ({ board, onClick }) => {
  return (
    // board will be an array of nine elements
    <div className="board">
      {board.map((item, index) => {
        return (
          <Box
            value={item}
            key={index}
            // don't call the function when already clicked button is again clicked
            onClick={() => item === null && onClick(index)}
          />
        );
      })}
    </div>
  );
};
export default Board;
