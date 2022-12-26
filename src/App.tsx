import React from "react";
import "./App.css";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { GameStore } from "./lib/gameStore";
import { MineCase } from "./components/mines/MineCase";
import { Mine } from "./components/mines/mine";
import {
  Amount10,
  Amount100,
  Amount15,
  Amount25,
  Amount5,
  Amount50,
} from "./components/buttons/amounts";
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
      <Case>
        <MineCase>
          {gameStore.mines.map((mine, mineIndex) => (
            <Mine
              key={`mine${mineIndex}`}
              onClick={() => gameStore.flip(mine.x, mine.y)}
              data-revealed={mine.isRevealed}
            >
              {mine.isRevealed ? (mine.isMine ? "💣" : "⭐") : ""}
            </Mine>
          ))}
        </MineCase>
      </Case>
    </>
  );
});

export default App;
