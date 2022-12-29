import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";
import { gameStore } from "../../App";
import { ActionButton } from "./button.styled";
import { ActionButtonProps } from "./button.types";

export const MineAmountCase = styled.div`
  display: grid;
  width: 600px;
  height: 50px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 25px;
`;

export const MineAmountButton = observer((props: ActionButtonProps) => (
  <ActionButton
    data-disabled={props.mineAmount === gameStore.minesAmount}
    onClick={() => {
      gameStore.setMinesAmount(props.mineAmount!);
      console.log(gameStore.minesAmount);
    }}
  >
    {props.mineAmount}💣
  </ActionButton>
));
