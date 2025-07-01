import coinHead from "./assets/head.png";
import coinTail from "./assets/tail.png";
import { useState } from "react";
import Webhead from "./componments/webhead";
import "./App.css";

function App() {
  const [coinFace, setCoinFace] = useState("head");
  const [isFlipping, setIsFlipping] = useState(false);
  const [tailcount, setTailCount] = useState(0);
  const [headcount, setHeadCount] = useState(0);

  function randomInt() {
    var res = Math.floor(Math.random() * 2);
    if (res === 0) {
      setTailCount(tailcount + 1);
    } else {
      setHeadCount(headcount + 1);
    }
    return res;
  }

  const handleFlip = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCoinFace(randomInt() == 1 ? "tail" : "head");
      setIsFlipping(false);
    }, 600); // 动画时长与CSS一致
  };

  return (
    <>
      <Webhead />

      {/* Body of the app */}
      <div className="container">
        <h1 className="main-title">Flip the coin</h1>

        <div className="coin-container">
          <img
            src={coinFace === "head" ? coinHead : coinTail}
            alt="coin"
            className={`coin${isFlipping ? " move-updown" : ""}`}
          />
        </div>
        <div className="result-container">
          <h2>Result: {coinFace}</h2>
          <p>Heads: {headcount}</p>
          <p>Tails: {tailcount}</p>
        </div>
        <div className="button-container">
          <button onClick={handleFlip}>Flip the coin</button>
        </div>
      </div>
    </>
  );
}

export default App;
