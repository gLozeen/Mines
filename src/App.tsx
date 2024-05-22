import React from "react";
import "./App.css";
import { observer } from "mobx-react";
import { GameStore } from "./lib/gameStore";
import { MineCase } from "./components/mines/MineCase";
import { MineComponent } from "./components/mines/mine";
import { Bet } from "./components/buttons/bet";
import { ButtonType, GameState } from "./lib/stateMap.types";
import { Case } from "./components/mines/case";
import { ShowBet } from "./components/money/showBet";
import { Repeat } from "./components/buttons/repeat";
import { ButtonsCase } from "./components/buttons/buttonsCase";
import { StartGame } from "./components/buttons/startGame";
import {
  MineAmountButton,
  MineAmountCase,
} from "./components/buttons/mineAmountCase";
import { GoBack } from "./components/buttons/goBack";
import { ShowFunds } from "./components/money/showFunds";

export const gameStore = new GameStore();
const App = observer(() => {
  React.useEffect(() => {
    console.log("init", !document.cookie);
    if (!document.cookie) {
      document.cookie = "funds=1000";
      gameStore.funds = +document.cookie.substring(6);
    } else {
      gameStore.funds = +document.cookie.substring(6);
    }
    console.log("current funds", gameStore.funds);
    gameStore.changeState();
  }, []);
  return (
    <>
      <ShowBet
        betAmount={
          gameStore.state === GameState.StartAwait
            ? gameStore.betAmount
            : gameStore.toWin
        }
        gamestore={gameStore}
      />
      <ShowFunds funds={gameStore.funds} />

      <ButtonsCase isPlayerTurn={true}>
        {gameStore.state !== GameState.StartAwait &&
          gameStore.state !== GameState.Init && (
            <Repeat
              data-disabled={gameStore.state !== GameState.GameEnd}
              onClick={() => {
                if (
                  gameStore.state === GameState.GameEnd &&
                  gameStore.funds - gameStore.betAmount > 0
                ) {
                  gameStore.changeState<GameState.GameEnd>({
                    buttonType: ButtonType.Repeat,
                  });
                } else gameStore.errorHandler();
              }}
            >
              Repeat ♻
            </Repeat>
          )}
        {gameStore.state !== GameState.StartAwait &&
          gameStore.state !== GameState.Init && (
            <GoBack
              data-disabled={
                !(gameStore.state === GameState.GameEnd || gameStore.turn >= 1)
              }
              onClick={() => {
                if (
                  gameStore.state === GameState.GameEnd &&
                  gameStore.turn >= 1
                )
                  gameStore.changeState<GameState.GameEnd>({
                    buttonType: ButtonType.GoBack,
                  });
                else if (
                  gameStore.state === GameState.PlayerTurn &&
                  gameStore.turn >= 1
                ) {
                  gameStore.isWon = true;
                  gameStore.changeState<GameState.PlayerTurn>({
                    buttonType: ButtonType.GoBack,
                  });
                }
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
