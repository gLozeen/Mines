import React from "react";
import "./App.css";
import { observer } from "mobx-react";
import { GameStore } from "./lib/gameStore";
import { MineCase } from "./components/mines/MineCase";
import { MineComponent } from "./components/mines/mine";
import { Bet } from "./components/buttons/bet";
import { ButtonType, GameState } from "./lib/stateMap.types";
import { Case } from "./components/mines/case";
import { ShowBet } from "./components/bet/showBet";
import { Repeat } from "./components/buttons/repeat";
import { ButtonsCase } from "./components/buttons/buttonsCase";
import { StartGame } from "./components/buttons/startGame";
import {
  MineAmountButton,
  MineAmountCase,
} from "./components/buttons/mineAmountCase";
import { GoBack } from "./components/buttons/goBack";

export const gameStore = new GameStore();
const App = observer(() => {
  React.useEffect(() => {
    console.log(gameStore.state);
    gameStore.changeState();
  }, []);
  return (
    <>
      <ShowBet betAmount={gameStore.betAmount} />

      <ButtonsCase isPlayerTurn={true}>
        {gameStore.state !== GameState.StartAwait &&
          gameStore.state !== GameState.Init && (
            <Repeat
              data-disabled={gameStore.state !== GameState.GameEnd}
              onClick={() => {
                if (gameStore.state === GameState.GameEnd)
                  gameStore.changeState<GameState.GameEnd>({
                    buttonType: ButtonType.Repeat,
                  });
              }}
            >
              Repeat ♻
            </Repeat>
          )}
        {gameStore.state !== GameState.StartAwait &&
          gameStore.state !== GameState.Init && (
            <GoBack
              data-disabled={gameStore.state !== GameState.GameEnd}
              onClick={() => {
                if (gameStore.state === GameState.GameEnd)
                  gameStore.changeState<GameState.GameEnd>({
                    buttonType: ButtonType.GoBack,
                  });
              }}
            >
              Go back ◀
            </GoBack>
          )}
        {gameStore.state === GameState.StartAwait &&
          [5, 10, 15, 25, 50, 100].map((bet) => (
            <Bet betAmount={bet} key={`bet${bet}`}></Bet>
          ))}
        {gameStore.state === GameState.StartAwait && (
          <StartGame
            allInputs={
              gameStore.betAmount && gameStore.minesAmount ? true : false
            }
          />
        )}
      </ButtonsCase>
      <Case>
        {gameStore.state === GameState.StartAwait && (
          <MineAmountCase>
            {[3, 5, 10, 15, 20].map((mineAmounts) => (
              <MineAmountButton
                key={`mineButton${mineAmounts}`}
                mineAmount={mineAmounts}
              />
            ))}
          </MineAmountCase>
        )}
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
