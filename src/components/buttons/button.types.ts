export interface ActionButtonProps
  extends Partial<React.HTMLAttributes<HTMLDivElement>> {
  disabled?: boolean;
  betAmount: number;
}
export interface ButtonsProps
  extends Partial<React.HTMLAttributes<HTMLDivElement>> {
  isPlayerTurn?: boolean;
}
