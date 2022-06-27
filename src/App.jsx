import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers";
import "./styles/root.scss";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);
  const message = winner
    ? `Winner: ${winner}`
    : `Next player:${isXNext ? "X" : "O"} `;

  function handleSquareClick(position) {
    if (board[position] || winner) {
      return;
    }

    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "X" : "O";
        }
        return square;
      });
    });
    setIsXNext(!isXNext);
  }
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board handleSquareClick={handleSquareClick} board={board} />
    </div>
  );
}

export default App;
