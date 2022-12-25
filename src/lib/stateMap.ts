import { gameStore } from "../App";

import {
  ButtonType,
  GameState,
  GameStateEffect,
  GameStateHandlers,
  GameStateTransitions,
} from "./stateMap.types";

export const stateTransitions: GameStateTransitions = {
  [GameState.Bet]: function (
    payload?: { betAmount: number } | undefined
  ): GameState {
    throw new Error("Function not implemented.");
  },
  [GameState.Setup]: function (
    payload?: Record<string, any> | undefined
  ): GameState {
    throw new Error("Function not implemented.");
  },
  [GameState.Hit]: function (
    payload?: Record<string, any> | undefined
  ): GameState {
    throw new Error("Function not implemented.");
  },
  [GameState.Stand]: function (
    payload?: Record<string, any> | undefined
  ): GameState {
    throw new Error("Function not implemented.");
  },
  [GameState.PlayerTurn]: function (
    payload?: { buttonType: ButtonType } | undefined
  ): GameState {
    throw new Error("Function not implemented.");
  },
  [GameState.DealerTurn]: function (
    payload?: Record<string, any> | undefined
  ): GameState {
    throw new Error("Function not implemented.");
  },
  [GameState.EndGame]: function (
    payload?: Record<string, any> | undefined
  ): GameState {
    throw new Error("Function not implemented.");
  },
};

export const effectsMap: GameStateEffect[] = [];

export const stateHandlers: GameStateHandlers = {
  [GameState.Bet]: function (
    payload?: { betAmount: number } | undefined
  ): void {
    throw new Error("Function not implemented.");
  },
  [GameState.Setup]: function (
    payload?: Record<string, any> | undefined
  ): void {
    throw new Error("Function not implemented.");
  },
  [GameState.Hit]: function (payload?: Record<string, any> | undefined): void {
    throw new Error("Function not implemented.");
  },
  [GameState.Stand]: function (
    payload?: Record<string, any> | undefined
  ): void {
    throw new Error("Function not implemented.");
  },
  [GameState.PlayerTurn]: function (
    payload?: { buttonType: ButtonType } | undefined
  ): void {
    throw new Error("Function not implemented.");
  },
  [GameState.DealerTurn]: function (
    payload?: Record<string, any> | undefined
  ): void {
    throw new Error("Function not implemented.");
  },
  [GameState.EndGame]: function (
    payload?: Record<string, any> | undefined
  ): void {
    throw new Error("Function not implemented.");
  },
};
export { GameState };
