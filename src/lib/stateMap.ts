import { gameStore } from "../App";

import {
  ButtonType,
  GameState,
  GameStateEffect,
  GameStateHandlers,
  GameStateTransitions,
} from "./stateMap.types";

export const stateTransitions: GameStateTransitions = {
  [GameState.StartAwait]: () => GameState.GenerateMines,
  [GameState.GenerateMines]: () => GameState.PlayerTurn,
  [GameState.PlayerTurn]: () => GameState.ChangeMineLook,
  [GameState.ChangeMineLook]: (payload) => {
    console.log(payload);
    return payload?.isMine ? GameState.GameEnd : GameState.PlayerTurn;
  },
  [GameState.GameEnd]: (payload) => {
    if (payload?.buttonType === ButtonType.Repeat) {
      return GameState.GenerateMines;
    } else return GameState.StartAwait;
  },
  [GameState.Init]: () => GameState.StartAwait,
};

export const effectsMap: GameStateEffect[] = [];

export const stateHandlers: GameStateHandlers = {
  [GameState.GenerateMines]: () => {
    gameStore.fields = [];
    gameStore.generateFields();
    gameStore.changeState();
  },
  [GameState.ChangeMineLook]: () => {
    console.log(`ChangeMineLook   ${gameStore.isMineTest}`);
  },
  [GameState.PlayerTurn]: () => {
    console.log("Player");
  },
  [GameState.GameEnd]: () => {
    gameStore.gameEnd();
    gameStore.showAllFields();
  },
  [GameState.StartAwait]: () => {
    gameStore.fields = [];
    gameStore.minesAmount = 0;
    gameStore.turn = 0;
    gameStore.betAmount = 0;
    console.log("StartAwait");
  },
  [GameState.Init]: () => {
    gameStore.changeState();
  },
};
export { GameState };
