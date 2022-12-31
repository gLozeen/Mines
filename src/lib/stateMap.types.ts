export enum GameState {
  GenerateMines = "generateMines",
  StartAwait = "StartAwait",
  ChangeMineLook = "changeMineLook",
  PlayerTurn = "playerTurn",
  GameEnd = "gameEnd",
  Init = "",
}

export type GameStateTransition<T extends GameState> = (
  payload?: GameStatePayload<T>
) => GameState;

export type GameStateTransitions = {
  [T in GameState]: GameStateTransition<T>;
};

export type GameStateEffect = {
  from: GameState[];
  to: GameState[];
  effects: (() => void)[];
};

export type GameStateHandler<T extends GameState> = (
  payload?: GameStatePayload<T>
) => void;

export interface GameStatePossiblePayload
  extends Record<GameState, Record<string, any>> {
  [GameState.StartAwait]: { betAmount: number };
  [GameState.ChangeMineLook]: { x: number; y: number; isMine: boolean };
  [GameState.GameEnd]: { buttonType: ButtonType };
  [GameState.PlayerTurn]: { buttonType: ButtonType };
}

export type GameStatePayload<T extends GameState> = GameStatePossiblePayload[T];

export type GameStateHandlers = {
  [T in GameState]: GameStateHandler<T>;
};
export enum ButtonType {
  Repeat,
  GoBack,
}
