import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { ButtonsProps } from "./button.types";

export const ActionButton = styled.div`
  font-weight: bold;
  user-select: none;
  height: 30px;
  width: 100px;
  background-color: #464e87;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  @media (hover: hover) {
    &:hover {
      background-color: #4e568f;
      transform: scale(0.95);
    }
    &[data-disabled="true"] {
      background-color: #262754;
    }
  }

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20%;
`;
export const StyledButtonsCase = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 2%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  &[data-is-player-turn="true"] {
    grid-template-columns: 1fr;
  }
  gap: 10px;
`;
