import { Component } from "solid-js";
import { styles } from "../state/styles";
import { InputControlProps } from "@types";

export const InputControl: Component<InputControlProps> = (props) => {
  return <div class={styles.inputControl()}>{props.children}</div>;
};
