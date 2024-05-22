import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { GameStore } from "../../lib/gameStore";
import { GameState } from "../../lib/stateMap.types";

const Bet = styled.div`
  width: 80px;
  height: 40px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 112px;
  font-weight: 700;
  font-size: 14px;
  line-height: 36px;
  color: white;
  justify-items: center;
  align-items: center;
  font-family: "Ponjoung", sans-serif;
  text-align: center;
  position: fixed;
  left: 10px;
  top: 10px;
`;
export interface ShowBetProps {
  betAmount: number;
  gamestore: GameStore;
}

export const ShowBet = observer((props: ShowBetProps) => (
  <Bet>
    {props.gamestore.state === GameState.StartAwait ? "Bet:" : "To win:"}{" "}
    {props.betAmount}$
  </Bet>
));
