import { styles } from "@style";
import { InputLabelProps } from "@types";
import { Component } from "solid-js";

export const InputLabel: Component<InputLabelProps> = (props) => {
  return (
    <span class={styles.inputLabel()} {...props}>
      {props.label}
    </span>
  );
};
