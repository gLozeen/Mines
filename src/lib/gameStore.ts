import { makeAutoObservable } from "mobx";
import toast from "react-hot-toast";
import { gameStore } from "../App";
import { effectsMap, stateHandlers, stateTransitions } from "./stateMap";
import { GameState, GameStatePayload } from "./stateMap.types";

export interface Field {
  x: number;
  y: number;
  isMine: boolean;
  isRevealed: boolean;
}

export class GameStore {
  fields: Field[] = [];
  betAmount: number = 0;
  coefficient: number[] = [
    1, 0.57, 0.61, 0.64, 0.66, 0.68, 0.69, 0.71, 0.72, 0.73, 0.74, 0.25, 0.76,
    0.76, 0.77, 0.78, 0.78, 0.79, 0.79, 0.8, 0.8, 0.81, 0.81, 0.82,
  ];
  prize: number[] = [];
  turn: number = 0;
  isMineTest: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }
  state: GameState = GameState.Init;
  changeState<T extends GameState>(payload?: GameStatePayload<T>): void {
    //@ts-ignore
    const newState = stateTransitions[this.state](payload);

    effectsMap
      .filter(
        (effect) =>
          effect.from.includes(this.state) && effect.to.includes(newState)
      )
      .forEach((map) => map.effects.forEach((effect) => effect()));

    console.log(`${this.state} > ${newState}`);

    this.state = newState;

    stateHandlers[newState]();
  }

  setBet(bet: number) {
    this.betAmount = bet;
  }

  mineClicked(field: Field) {
    if (this.state !== GameState.PlayerTurn) return;
    console.log(`${this.state}`);
    gameStore.changeState();
    this.isMineTest = field.isMine;
    this.flip(field.x, field.y);
    this.changeState<GameState.ChangeMineLook>({
      x: field.x,
      y: field.y,
      isMine: field.isMine,
    });
  }

  fillFieldContainer() {
    if (this.fields.length) return;
    const minesToPlace = 3;
    let minesPlaced = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        this.fields.push({
          x: i,
          y: j,
          isRevealed: false,
          isMine: false,
        });
      }
    }

    while (minesPlaced < minesToPlace) {
      const x = Math.floor(Math.random() * (this.fields.length - 1));
      const y = Math.floor(Math.random() * (this.fields.length - 1));
      const mineFinded = this.fields.find(
        (field) => field.x === x && field.y === y && field.isMine === false
      );
      if (mineFinded !== undefined) {
        mineFinded!.isMine = true;
        minesPlaced++;
      }
    }
  }

  generateFields() {
    this.turn = 0;
    this.betAmount = 0;
    if (this.fields.length === 0) this.fillFieldContainer();
  }

  flip(x: number, y: number) {
    const found = this.fields.find((Field) => Field.x === x && Field.y === y);
    if (!found) return;
    if (found.isRevealed === false) this.turn++;
    found.isRevealed = true;
  }

  gameEnd() {
    toast("You lose!", {
      icon: "❌",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        width: "1000px",
        height: "100px",
        fontSize: "40px",
      },
      position: "bottom-center",
    });
  }

  showAllFields() {
    gameStore.fields.map((field) => (field.isRevealed = true));
  }
}
