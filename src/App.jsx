import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function Board() {
  const [value, setValue] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);

  function calculateWinner() {
    const winningLines = [
      [0, 1, 2],
      [0, 3, 6],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [1, 4, 7],
      [2, 4, 6],
      [0, 4, 8],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (value[a] && value[a] === value[b] && value[a] === value[c]) {
        return value[a];
      }
    }
    return null;
  }
  let Winner = calculateWinner();
  function handleClick(i) {
    const nextSquare = [...value];
    if (nextSquare[i] || calculateWinner()) return;
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    //== xISNext ? X : O;
    setValue(nextSquare);
    setXIsNext(!xIsNext);
    calculateWinner();
    //console.log(nextSquare);
  }

  return (
    <>
      <div>
        <Squares value={value[0]} handleClick={() => handleClick(0)} />
        <Squares value={value[1]} handleClick={() => handleClick(1)} />
        <Squares value={value[2]} handleClick={() => handleClick(2)} />
      </div>
      <div>
        <Squares value={value[3]} handleClick={() => handleClick(3)} />
        <Squares value={value[4]} handleClick={() => handleClick(4)} />
        <Squares value={value[5]} handleClick={() => handleClick(5)} />
      </div>
      <div>
        <Squares value={value[6]} handleClick={() => handleClick(6)} />
        <Squares value={value[7]} handleClick={() => handleClick(7)} />
        <Squares value={value[8]} handleClick={() => handleClick(8)} />
      </div>
      {Winner}
    </>
  );
}

function Squares({ value, handleClick }) {
  return (
    <>
      <button onClick={handleClick}>{value}</button>
    </>
  );
}

export default Board;
