import { gameStore } from "../App";

import {
  GameState,
  GameStateEffect,
  GameStateHandlers,
  GameStateTransitions,
} from "./stateMap.types";

export const stateTransitions: GameStateTransitions = {
  [GameState.BetAwait]: () => GameState.PlayerTurn,
  [GameState.GenerateMines]: () => GameState.BetAwait,
  [GameState.PlayerTurn]: () => GameState.ChangeMineLook,
  [GameState.ChangeMineLook]: (payload) => {
    console.log(payload);
    return gameStore.isMineTest ? GameState.GameEnd : GameState.PlayerTurn;
  },
  [GameState.GameEnd]: () => GameState.GenerateMines,
  [GameState.Init]: () => GameState.GenerateMines,
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
  },
  [GameState.BetAwait]: () => {
    console.log("BetAwait");
  },
  [GameState.Init]: () => {
    gameStore.changeState();
  },
};
export { GameState };
