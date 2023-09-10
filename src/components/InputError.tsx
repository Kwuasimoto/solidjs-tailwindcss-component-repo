import { styles } from "@style";
import { InputErrorProps } from "@types";
import { Component } from "solid-js";

export const InputError: Component<InputErrorProps> = (props) => {
  return (
    <div class={styles.inputError()} {...props}>
      {props.error || "No Errors"}
    </div>
  );
};
