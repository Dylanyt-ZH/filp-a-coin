import coinHead from "./assets/head.png";
import coinTail from "./assets/tail.png";
import { useState } from "react";
import Webhead from "./componments/webhead";
import "./App.css";

function App() {
  const [coinFace, setCoinFace] = useState("head");

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
            className="coin"
          />
        </div>
        <div className="button-container">
          <button
            onClick={() =>
              coinFace === "head" ? setCoinFace("tail") : setCoinFace("head")
            }
          >
            Flip the coin
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
