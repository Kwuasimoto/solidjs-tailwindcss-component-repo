import { InputErrorProps } from "@types";
import { Component } from "solid-js";
import { styles } from "../styles";

export const InputError: Component<InputErrorProps> = (props) => {
  return (
    <div class={styles.inputError()} {...props}>
      {props.error || "No Errors"}
    </div>
  );
};
