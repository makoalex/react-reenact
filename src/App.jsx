import { useState } from "react";

import "./App.css";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player-name">Player I</span>
            <span className="player-info">X</span>
          </li>
          <li>
            <span className="player-name">Player II</span>
            <span className="player-info">0</span>
          </li>
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
