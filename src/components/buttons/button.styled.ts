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

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20%;
`;

export const Buttons = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 2%;
  z-index: 100;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
