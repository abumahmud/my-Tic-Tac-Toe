import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function Board() {
  const [value, setValue] = useState(Array(9).fill("null"));

  return (
    <>
      <Squares value={value[0]} />
      <Squares value={value[1]} />
      <Squares value={value[2]} />
      <Squares value={value[3]} />
      <Squares value={value[4]} />
      <Squares value={value[5]} />
      <Squares value={value[6]} />
      <Squares value={value[7]} />
      <Squares value={value[8]} />
    </>
  );
}

function Squares({ value }) {
  return (
    <>
      <button>{value}</button>
    </>
  );
}

export default Board;
