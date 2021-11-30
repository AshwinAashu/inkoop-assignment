import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [gamesWonA, setGamesWonA] = useState(0);
  const [gamesWonB, setGamesWonB] = useState(0);
  let maxPower = 5,
    minPower = 0;
  const [rounds, setRounds] = useState(0);

  const checkWinner = () => {
    if (gamesWonA === 3) {
      return "Player1 won the match!";
    } else if (gamesWonB === 3) {
      return "Player2 won the match!";
    }
  };

  //start game
  const shotHandler = () => {
    if (rounds > 4) {
      alert("5 Rounds are done");
    } else {
      setRounds(rounds + 1);
      let shotPower;
      let healthA = 100;
      let healthB = 100;
      let playerTurnA = true;
      while (healthA > 0 && healthB > 0) {
        shotPower =
          Math.floor(Math.random() * (maxPower + 1 - minPower)) + minPower;
        playerTurnA
          ? (healthB = healthB - shotPower)
          : (healthA = healthA - shotPower);
        playerTurnA = !playerTurnA;
      }

      if (healthA <= 0) {
        setGamesWonB(gamesWonB + 1);
      } else if (healthB <= 0) {
        setGamesWonA(gamesWonA + 1);
      }
    }
  };

  return (
    <div className="App">
      <div className="container-main">
        <button className="btn-primary" onClick={shotHandler}>
          Start Game
        </button>
        <br />
        <span> Player1 : {gamesWonA} </span>
        <br />
        <span> Player2: {gamesWonB} </span>
        <br />
        {checkWinner()}
      </div>
    </div>
  );
}
