import { computed, makeAutoObservable } from "mobx";
import { Mine } from "../components/mines/mine";
import { effectsMap, stateHandlers, stateTransitions } from "./stateMap";
import { GameState, GameStatePayload } from "./stateMap.types";

const minesAmount = 25;

export interface Mine {
  x: number;
  y: number;
  isMine: boolean;
  isRevealed: boolean;
}

export class GameStore {
  mines: Mine[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  state: GameState = GameState.BetAwait;
  changeState<T extends GameState>(payload?: GameStatePayload<T>): void {
    //@ts-ignore
    const newState = stateTransitions[this.state](payload);

    effectsMap
      .filter(
        (effect) =>
          effect.from.includes(this.state) && effect.to.includes(newState)
      )
      .forEach((map) => map.effects.forEach((effect) => effect()));
    this.state = newState;

    stateHandlers[newState]();
  }
  fillMinecontainer() {
    if (this.mines.length) return;
    const minesToPlace = 3;
    let minesPlaced = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const isMine = Math.random() < 0.2;
        isMine && minesPlaced++;
        this.mines.push({
          x: i,
          y: j,
          isRevealed: false,
          isMine: isMine && minesPlaced <= minesToPlace,
        });
      }
    }
  }
  generateMines() {
    console.log(this.mines.length);
    if (this.mines.length === 0) this.fillMinecontainer();
  }
  flip(x: number, y: number) {
    const found = this.mines.find((mine) => mine.x === x && mine.y === y);
    if (!found) return;
    found.isRevealed = true;
    console.log(x, y);
  }
}
