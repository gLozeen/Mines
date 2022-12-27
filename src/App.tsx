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
import { ShowBet } from "./components/bet/showBet";

export const gameStore = new GameStore();
const App = observer(() => {
  React.useEffect(() => {
    console.log(gameStore.state);
    gameStore.changeState();
  }, []);
  return (
    <>
      <ShowBet betAmount={gameStore.betAmount} />
      <Buttons>
        {[5, 10, 15, 25, 50, 100].map((bet) => (
          <Bet
            betAmount={bet}
            key={`bet${bet}`}
            onClick={() => {
              gameStore.setBet(bet);
              console.log(gameStore.betAmount);
            }}
          ></Bet>
        ))}
      </Buttons>
      <Case>
        <MineCase>
          {gameStore.fields.map((field, mineIndex) => (
            <MineComponent
              key={`mine${mineIndex}`}
              onClick={() => gameStore.mineClicked(field)}
              revealed={field.isRevealed}
            >
              {field.isRevealed ? (field.isMine ? "💣" : "⭐") : ""}
            </MineComponent>
          ))}
        </MineCase>
      </Case>
    </>
  );
});

export default App;
