import { InputControlProps } from "@types";
import { Component } from "solid-js";
import { styles } from "../styles";

export const InputControl: Component<InputControlProps> = (props) => {
  return <div class={styles.inputControl()}>{props.children}</div>;
};
