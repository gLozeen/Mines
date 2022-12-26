import styled from "@emotion/styled";
import { CaseOrDefaultClause } from "typescript";
import { wonMine } from "./wonMine";
import { loseMine } from "./loseMine";

interface MineComponentProps {
  won: boolean;
  key: string;
}

export const Mine = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid silver;
  background-color: silver;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 56px;
  @media screen and (max-width: 420px) {
    font-size: 14px;
  }

  &[data-revealed="true"] {
    transform: rotateY(180deg);
    transition: transform 0.5s;
  }
`;
