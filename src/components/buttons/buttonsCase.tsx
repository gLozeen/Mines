import { observer } from "mobx-react";
import { StyledButtonsCase } from "./button.styled";
import { ButtonsProps } from "./button.types";

export const ButtonsCase = observer((props: ButtonsProps) => (
  <StyledButtonsCase data-is-player-turn={props.isPlayerTurn}>
    {props.children}
  </StyledButtonsCase>
));
