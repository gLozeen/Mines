import styled from "@emotion/styled";

export const Mine = styled.div`
  width: 100%;
  height: 100%;
  font-size: 56px;

  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

export const MineInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  &[data-revealed="true"] {
    transform: rotateY(180deg);
  }
  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

const MineFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: silver;
`;

const MineBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: silver;
`;
interface MineComponentProps {
  children: React.ReactNode;
  revealed: boolean;
  onClick: () => void;
}

export const MineComponent = (props: MineComponentProps) => {
  return (
    <Mine onClick={props.onClick}>
      <MineInner data-revealed={props.revealed}>
        <MineFront></MineFront>
        <MineBack>{props.children}</MineBack>
      </MineInner>
    </Mine>
  );
};
