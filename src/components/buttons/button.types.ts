export interface ActionButtonProps
  extends Partial<React.HTMLAttributes<HTMLDivElement>> {
  disabled?: boolean;
  betAmount?: number;
  mineAmount?: number;
}
export interface ButtonsProps
  extends Partial<React.HTMLAttributes<HTMLDivElement>> {
  isPlayerTurn?: boolean;
}
export interface StartGameProps
  extends Partial<React.HTMLAttributes<HTMLDivElement>> {
  allInputs?: boolean;
}
