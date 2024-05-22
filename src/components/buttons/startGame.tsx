import { observer } from "mobx-react-lite";
import { gameStore } from "../../App";
import { GameState } from "../../lib/stateMap.types";
import { StyledStartGame } from "./button.styled";
import { StartGameProps } from "./button.types";

export const StartGame = observer((props: StartGameProps) => (
  <StyledStartGame
    data-all-inputs={props.allInputs}
    onClick={() => {
      console.log(props.allInputs, gameStore.funds - gameStore.betAmount >= 0);
      if (props.allInputs && gameStore.funds - gameStore.betAmount >= 0) {
        gameStore.changeState<GameState.StartAwait>();
      } else {
        gameStore.errorHandler();
      }
    }}
  >
    Start the Game!
  </StyledStartGame>
));
