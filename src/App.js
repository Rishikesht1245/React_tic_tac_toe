import { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import Swal from "sweetalert2";

function App() {
  // creating an array of 9 elements and filling null as value.
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsPlaying, setXIsPlaying] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [tie, setTie] = useState(0);

  //wind condition based on array indexes
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleBoxClick = (boxId) => {
    const updatedBoard = board.map((item, index) => {
      if (index === boxId) {
        return xIsPlaying ? "X" : "O";
      } else {
        return item;
      }
    });
    console.log("updated", updatedBoard);
    setBoard(updatedBoard);
    setXIsPlaying(!xIsPlaying);
    const winner = checkWinner(updatedBoard);

    if (winner) {
      //updating winner score
      if (winner === "X") {
        Swal.fire({
          position: "center",
          imageUrl: "https://media.tenor.com/Oh5H0l6dyGMAAAAj/me-first-me.gif",
          title: "X won the game",
          showConfirmButton: false,
          timer: 2500,
          width: "350px",
          height: "150px",
        });
        setXScore(xScore + 1);
        setGameOver(true);
      } else {
        Swal.fire({
          position: "center",
          imageUrl: "https://media.tenor.com/Oh5H0l6dyGMAAAAj/me-first-me.gif",
          title: "O won the game",
          showConfirmButton: false,
          timer: 2500,
          width: "350px",
          height: "150px",
        });
        setOScore(oScore + 1);
        setGameOver(true);
      }
    }

    let filled = true;

    updatedBoard.forEach((item) => {
      if (item === null) {
        filled = false;
      }
    });

    if (filled && winner !== "X" && winner !== "O") {
      filled = true;
      setTie(tie + 1);
      Swal.fire({
        position: "center",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/22/Sad.gif",
        title: "Oh It's a tie",
        showConfirmButton: false,
        timer: 2500,
        width: "350px",
        height: "150px",
      });
    }
  };

  const checkWinner = (updatedBoard) => {
    // for each element in the winner conditions array,
    // checking if the inner elements are equal or not
    for (let i = 0; i < winConditions.length; i++) {
      const [x, y, z] = winConditions[i];

      // x,y,z will be the winning conditions
      if (
        updatedBoard[x] &&
        updatedBoard[x] === updatedBoard[y] &&
        updatedBoard[y] === updatedBoard[z]
      ) {
        console.log("winner");
        //will be X or O (return winner)
        return updatedBoard[x];
      }
    }
  };

  const reset = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  const restartGame = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setXScore(0);
    setOScore(0);
    setTie(0);
  };

  return (
    <div className="App">
      <ScoreBoard
        xScore={xScore}
        oScore={oScore}
        tie={tie}
        playing={xIsPlaying}
      />
      <Board board={board} onClick={gameOver ? reset : handleBoxClick} />
      <button className="btn-1" onClick={reset}>
        Play again
      </button>
      <button className="btn" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}

export default App;
