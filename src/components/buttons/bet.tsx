import { observer } from "mobx-react";
import { gameStore } from "../../App";
import { GameState } from "../../lib/stateMap.types";
import { ActionButton } from "./button.styled";
import { ActionButtonProps } from "./button.types";

export const Bet = observer((props: ActionButtonProps) => (
  <ActionButton
    data-disabled={!(gameStore.state === GameState.BetAwait)}
    {...props}
    onClick={() => {
      if (gameStore.state === GameState.BetAwait)
        gameStore.changeState<GameState.BetAwait>({
          betAmount: props.betAmount,
        });
      gameStore.setBet(props.betAmount);
      console.log(gameStore.betAmount);
    }}
  >
    {props.betAmount}💲
  </ActionButton>
));
