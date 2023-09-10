import { Component } from "solid-js";
import { InputErrorProps } from "@types";
import { styles } from "../state/styles";

export const InputError: Component<InputErrorProps> = (props) => {
  return (
    <div class={styles.inputError()} {...props}>
      {props.error || "No Errors"}
    </div>
  );
};
