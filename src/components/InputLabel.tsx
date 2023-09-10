import { Component } from "solid-js";
import { InputLabelProps } from "@types";
import { styles } from "../state/styles";

export const InputLabel: Component<InputLabelProps> = (props) => {
  return (
    <span class={styles.inputLabel()} {...props}>
      {props.label}
    </span>
  );
};
