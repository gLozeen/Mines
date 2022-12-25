import React from "react";
import "./App.css";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { GameStore } from "./lib/gameStore";

export const gameStore = new GameStore();
const App = observer(() => {
  React.useEffect(() => {
    alert("woa");
  }, []);
  return (
    <>
      <div>ds</div>
    </>
  );
});
export default App;
