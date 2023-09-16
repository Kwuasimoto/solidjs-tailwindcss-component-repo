import { styles } from "@style";
import { InputControlProps } from "@types";
import { Component } from "solid-js";
import { cn } from "../util/merge-clsx";

export const InputControl: Component<InputControlProps> = (props) => {
  return (
    <div class={cn(styles.inputControl(), props.class)}>{props.children}</div>
  );
};
