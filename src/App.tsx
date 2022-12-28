import React from "react";
import "./App.css";
import { observer } from "mobx-react";
import { GameStore } from "./lib/gameStore";
import { MineCase } from "./components/mines/MineCase";
import { MineComponent } from "./components/mines/mine";
import { Bet } from "./components/buttons/bet";
import { GameState } from "./lib/stateMap.types";
import { Case } from "./components/mines/case";
import { ShowBet } from "./components/bet/showBet";
import { Repeat } from "./components/buttons/repeat";
import { ButtonsCase } from "./components/buttons/buttonsCase";
import { StartGame } from "./components/buttons/startGame";

export const gameStore = new GameStore();
const App = observer(() => {
  React.useEffect(() => {
    console.log(gameStore.state);
    gameStore.changeState();
  }, []);
  return (
    <>
      <ShowBet betAmount={gameStore.betAmount} />

      <ButtonsCase>
        {gameStore.state !== GameState.BetAwait &&
          gameStore.state !== GameState.Init && (
            <Repeat
              data-disabled={gameStore.state !== GameState.GameEnd}
              onClick={() => {
                if (gameStore.state === GameState.GameEnd)
                  gameStore.changeState();
              }}
            >
              Repeat ♻
            </Repeat>
          )}
        {gameStore.state === GameState.BetAwait &&
          [5, 10, 15, 25, 50, 100].map((bet) => (
            <Bet betAmount={bet} key={`bet${bet}`}></Bet>
          ))}
        {gameStore.state === GameState.BetAwait && <StartGame />}
      </ButtonsCase>
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
