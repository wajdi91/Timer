import React from "react";
import "./App.css";
// import Im from "./images/téléchargé.png";
function getTimeRemaining() {
  var t = 56000000;
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);

  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0")
  );
}

function App() {
  // let x = ;
  return (
    <div className="fond">
      <h3 className="time">{getTimeRemaining()}</h3>,
      <h4 className="button">
        <button>Start</button>,<button>Reset</button>
      </h4>
    </div>
  );
}

export default App;
