import React from "react";
import "./App.css";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { GameStore } from "./lib/gameStore";
import { MineCase } from "./components/mines/MineCase";
import { Mine, MineComponent } from "./components/mines/mine";
import { Bet } from "./components/buttons/bet";
import { Buttons } from "./components/buttons/button.styled";
import { GameState } from "./lib/stateMap.types";
import { Case } from "./components/mines/case";

export const gameStore = new GameStore();
const App = observer(() => {
  React.useEffect(() => {
    console.log(gameStore.state);
    gameStore.changeState();
  }, []);
  return (
    <>
      <Buttons>
        {[5, 10, 15, 25, 50, 100].map((bet) => (
          <Bet betAmount={bet} key={`bet${bet}`}></Bet>
        ))}
      </Buttons>
      <Case>
        <MineCase>
          {gameStore.mines.map((mine, mineIndex) => (
            <MineComponent
              key={`mine${mineIndex}`}
              onClick={() => gameStore.flip(mine.x, mine.y)}
              revealed={mine.isRevealed}
            >
              {mine.isRevealed ? (mine.isMine ? "💣" : "⭐") : ""}
            </MineComponent>
          ))}
        </MineCase>
      </Case>
    </>
  );
});

export default App;
