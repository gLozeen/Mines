import { gameStore } from "../App";

import {
  GameState,
  GameStateEffect,
  GameStateHandlers,
  GameStateTransitions,
  IsLosing,
} from "./stateMap.types";

export const stateTransitions: GameStateTransitions = {
  [GameState.BetAwait]: () => GameState.GenerateMines,
  [GameState.GenerateMines]: () => GameState.PlayerTurn,
  [GameState.PlayerTurn]: () => GameState.ChangeMineLook,
  [GameState.ChangeMineLook]: (payload) => {
    if (payload?.isLosing === IsLosing.WonTurn) return GameState.PlayerTurn;
    else return GameState.GameEnd;
  },
  [GameState.GameEnd]: () => GameState.GameEnd,
};

export const effectsMap: GameStateEffect[] = [];

export const stateHandlers: GameStateHandlers = {
  [GameState.GenerateMines]: () => {
    throw new Error("Function not implemented.");
  },
  [GameState.ChangeMineLook]: () => {
    throw new Error("Function not implemented.");
  },
  [GameState.PlayerTurn]: () => {
    throw new Error("Function not implemented.");
  },
  [GameState.GameEnd]: () => {
    throw new Error("Function not implemented.");
  },
  [GameState.BetAwait]: function (
    payload?: Record<string, any> | undefined
  ): void {
    throw new Error("Function not implemented.");
  },
};
export { GameState };
