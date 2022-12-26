import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { ActionButton } from "./button.styled";
import { ActionButtonProps } from "./button.types";

export const Amount5 = observer((props: ActionButtonProps) => (
  <ActionButton data-disabled={props.disabled} {...props}>
    5💲
  </ActionButton>
));

export const Amount10 = observer((props: ActionButtonProps) => (
  <ActionButton data-disabled={props.disabled} {...props}>
    10💲
  </ActionButton>
));

export const Amount15 = observer((props: ActionButtonProps) => (
  <ActionButton data-disabled={props.disabled} {...props}>
    15💲
  </ActionButton>
));

export const Amount25 = observer((props: ActionButtonProps) => (
  <ActionButton data-disabled={props.disabled} {...props}>
    25💲
  </ActionButton>
));

export const Amount50 = observer((props: ActionButtonProps) => (
  <ActionButton data-disabled={props.disabled} {...props}>
    50💲
  </ActionButton>
));

export const Amount100 = observer((props: ActionButtonProps) => (
  <ActionButton data-disabled={props.disabled} {...props}>
    100💲
  </ActionButton>
));
