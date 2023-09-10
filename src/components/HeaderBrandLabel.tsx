import { styles } from "@styles";
import { HeaderBrandLabelProps } from "@types";
import { Component } from "solid-js";

export const HeaderBrandLabel: Component<HeaderBrandLabelProps> = (props) => {
  return (
    <span class={styles.headerBrandLabel()} {...props}>
      {props.label}
    </span>
  );
};
