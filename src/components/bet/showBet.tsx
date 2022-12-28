import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { gameStore } from "../../App";

const Bet = styled.div`
  width: 40px;
  height: 30px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 112px;
  font-weight: 700;
  font-size: 14px;
  color: white;
  font-family: "Ponjoung", sans-serif;
  text-align: center;
  vertical-align: middle;
`;
export interface ShowBetProps {
  betAmount: number;
}

export const ShowBet = observer((props: ShowBetProps) => (
  <Bet>
    {gameStore.betAmount +
      Math.floor(gameStore.betAmount * gameStore.coefficient[gameStore.turn])}
  </Bet>
));
