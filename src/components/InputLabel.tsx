import { InputLabelProps } from "@types";
import { Component } from "solid-js";
import { styles } from "../styles";

export const InputLabel: Component<InputLabelProps> = (props) => {
  return (
    <span class={styles.inputLabel()} {...props}>
      {props.label}
    </span>
  );
};
