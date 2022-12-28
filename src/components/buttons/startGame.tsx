import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";
import { StyledStartGame } from "./button.styled";
import { StartGameProps } from "./button.types";

export const StartGame = observer((props: StartGameProps) => (
  <StyledStartGame data-all-inputs={props.allInputs}>
    Start the Game!
  </StyledStartGame>
));
