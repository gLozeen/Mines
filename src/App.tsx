import React from "react";
import "./App.css";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { GameStore } from "./lib/gameStore";
import { MineCase } from "./components/mine/MineCase";
import { Mine } from "./components/mine/Mine";
import { MineLine } from "./components/mine/MineLine";
import {
  Amount10,
  Amount100,
  Amount15,
  Amount25,
  Amount5,
  Amount50,
} from "./components/buttons/amounts";
import { Buttons } from "./components/buttons/button.styled";
import { GameState } from "./lib/stateMap.types";

export const gameStore = new GameStore();
const App = observer(() => {
  React.useEffect(() => {}, []);
  return (
    <>
      <Buttons>
        <Amount5
          onClick={() => gameStore.changeState()}
          disabled={gameStore.isDisabled()}
        />
        <Amount10
          onClick={() => gameStore.changeState()}
          disabled={gameStore.isDisabled()}
        />
        <Amount15
          onClick={() => gameStore.changeState()}
          disabled={gameStore.isDisabled()}
        />
        <Amount25
          onClick={() => gameStore.changeState()}
          disabled={gameStore.isDisabled()}
        />
        <Amount50
          onClick={() => gameStore.changeState()}
          disabled={gameStore.isDisabled()}
        />
        <Amount100
          onClick={() => gameStore.changeState()}
          disabled={gameStore.isDisabled()}
        />
      </Buttons>
      <MineCase>
        <MineLine>
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
        </MineLine>
        <MineLine>
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
        </MineLine>
        <MineLine>
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
        </MineLine>
        <MineLine>
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
        </MineLine>
        <MineLine>
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
          <Mine onClick={() => gameStore.mineClicked()} />
        </MineLine>
      </MineCase>
    </>
  );
});

export default App;
