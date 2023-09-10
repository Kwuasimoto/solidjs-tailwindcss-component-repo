import { styles } from "@style";
import { InputControlProps } from "@types";
import { Component } from "solid-js";

export const InputControl: Component<InputControlProps> = (props) => {
  return <div class={styles.inputControl()}>{props.children}</div>;
};
