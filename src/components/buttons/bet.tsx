import { observer } from "mobx-react";
import { gameStore } from "../../App";
import { ActionButton } from "./button.styled";
import { ActionButtonProps } from "./button.types";

export const Bet = observer((props: ActionButtonProps) => (
  <ActionButton
    data-disabled={props.betAmount === gameStore.betAmount}
    {...props}
    onClick={() => {
      if (!(props.betAmount === gameStore.betAmount))
        gameStore.setBet(props.betAmount!);
      console.log(gameStore.betAmount);
    }}
  >
    {props.betAmount}💲
  </ActionButton>
));
