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
  minesAmount: number = 0;
  fields: Field[] = [];
  betAmount: number = 0;
  coefficient: number[] = [
    0, 0.057, 0.061, 0.064, 0.066, 0.068, 0.069, 0.071, 0.072, 0.073, 0.074,
    0.075, 0.076, 0.077, 0.078, 0.079, 0.08, 0.081, 0.082, 0.083, 0.084, 0.085,
    0.086, 0.087,
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

  setMinesAmount(amount: number) {
    this.minesAmount = amount;
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
    const minesToPlace = this.minesAmount;
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
    if (this.fields.length === 0) this.fillFieldContainer();
  }

  flip(x: number, y: number) {
    const found = this.fields.find((Field) => Field.x === x && Field.y === y);
    if (!found) return;
    if (found.isRevealed === false) this.turn++;
    found.isRevealed = true;
  }

  allInputsNotProvided() {
    if (!this.betAmount) {
      toast("You have to choose how much you want to bet", {
        icon: "💢",
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          width: "1000px",
          height: "100px",
          fontSize: "23px",
        },
      });
    } else if (!this.minesAmount) {
      toast("You have to choose how much mines you want", {
        icon: "💢",
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          width: "1000px",
          height: "100px",
          fontSize: "23px",
        },
      });
    }
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
      position: "top-center",
    });
  }

  showAllFields() {
    gameStore.fields.map((field) => (field.isRevealed = true));
  }
}
