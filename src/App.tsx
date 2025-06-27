import { useState } from "react";
import coinHead from "./assets/head.png";
import coinTail from "./assets/tail.png";
import "./App.css";

function App() {
  const [coin, setCoin] = useState(coinHead);

  return (
    <>
      <div className="container">
        <h1 className="main-title">Flip the coin</h1>

        <div className="coin-container">
          <img src={coinHead} alt="coin" className="coin" />
        </div>
        <div className="button-container">
          <button>Flip the coin</button>
        </div>
      </div>
    </>
  );
}

export default App;
