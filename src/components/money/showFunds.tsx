import styled from "@emotion/styled";
import { observer } from "mobx-react";

const Funds = styled.div`
  width: 180px;
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
  right: 10px;
  top: 10px;
`;
interface ShowFundsProps {
  funds: number;
}
export const ShowFunds = observer((props: ShowFundsProps) => (
  <Funds>Current funds: {props.funds}💲</Funds>
));
