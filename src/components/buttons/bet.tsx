import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { gameStore } from "../../App";
import { GameState } from "../../lib/stateMap.types";
import { ActionButton } from "./button.styled";
import { ActionButtonProps } from "./button.types";

export const Bet = observer((props: ActionButtonProps) => (
  <ActionButton
    data-disabled={gameStore.state === GameState.BetAwait}
    {...props}
    onClick={() => {
      gameStore.changeState<GameState.BetAwait>({ betAmount: props.betAmount });
    }}
  >
    {props.betAmount}💲
  </ActionButton>
));
