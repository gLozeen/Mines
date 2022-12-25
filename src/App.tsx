import React from "react";
import "./App.css";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { GameStore } from "./lib/gameStore";
import { MineCase } from "./components/mine/MineCase";
import { Mine } from "./components/mine/Mine";
import { MineLine } from "./components/mine/MineLine";

export const gameStore = new GameStore();
const App = observer(() => {
  React.useEffect(() => {}, []);
  return (
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
  );
});

export default App;
