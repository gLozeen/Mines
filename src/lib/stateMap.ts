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
  [GameState.PlayerTurn]: (payload) => {
    return payload?.buttonType === ButtonType.GoBack
      ? GameState.GameEnd
      : GameState.ChangeMineLook;
  },
  [GameState.ChangeMineLook]: (payload) => {
    console.log(payload);
    return payload?.isMine ? GameState.GameEnd : GameState.PlayerTurn;
  },
  [GameState.GameEnd]: (payload) => {
    return payload?.buttonType === ButtonType.Repeat
      ? GameState.GenerateMines
      : GameState.StartAwait;
  },
  [GameState.Init]: () => GameState.StartAwait,
};

export const effectsMap: GameStateEffect[] = [];

export const stateHandlers: GameStateHandlers = {
  [GameState.GenerateMines]: () => {
    gameStore.fields = [];
    gameStore.turn = 0;
    gameStore.isWon = false;
    gameStore.generateFields();
    gameStore.changeState();
  },
  [GameState.ChangeMineLook]: () => {},
  [GameState.PlayerTurn]: () => {
    console.log("Player");
  },
  [GameState.GameEnd]: () => {
    gameStore.gameEnd(gameStore.isWon);
    gameStore.showAllFields();
  },
  [GameState.StartAwait]: () => {
    gameStore.fields = [];
    gameStore.minesAmount = 0;
    gameStore.betAmount = 0;
    console.log("StartAwait");
  },
  [GameState.Init]: () => {
    gameStore.changeState();
  },
};
export { GameState };
