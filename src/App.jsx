import { useState } from "react";

import "./App.css";
import Player from "./assets/components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
      <Player className= 'player' initialName="Player I" info="X" />
      <Player className= 'player' initialName="Player II" info="0" />

       
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
