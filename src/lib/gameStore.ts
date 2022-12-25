import { computed, makeAutoObservable } from "mobx";
import { effectsMap, stateHandlers, stateTransitions } from "./stateMap";
import { ButtonType, GameState, GameStatePayload } from "./stateMap.types";

export class GameStore {
  constructor() {
    makeAutoObservable(this);
  }
  state: GameState = GameState.Bet;
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
  mineClicked() {
    return alert("Mine clicked!");
  }
}
