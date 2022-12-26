import styled from "@emotion/styled";

export const MineCase = styled.div`
  width: 71.86%;
  height: 100%;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  padding: 175px;
  @media screen and (max-width: 420px) {
    padding: 0px;
    margin-top: 50%;
  }
  gap: 25px;
`;
