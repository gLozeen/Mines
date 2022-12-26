import styled from "@emotion/styled";

export const MineCase = styled.div`
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  padding: 0px;
  max-width: 600px;
  max-height: 600px;
  @media screen and (max-width: 420px) {
    padding: 0px;
    margin-top: 50%;
  }
  gap: 25px;
`;
