import styled from "@emotion/styled";

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
  }

  &[data-disabled="true"] {
    background-color: #262754;
    @media (hover: hover) {
      background-color: #262754;
      transform: scale(1);
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
    z-index: 100;
  }
  gap: 10px;
`;

export const StyledStartGame = styled(ActionButton)`
  width: 210px;
  height: 50px;
  font-size: 20px;
  grid-column: span 2;
`;
