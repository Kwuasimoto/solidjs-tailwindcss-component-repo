import { styles } from "@style";
import { HeaderBrandLabelProps } from "@types";
import { cn } from "@util";
import { Component } from "solid-js";

export const HeaderBrandLabel: Component<HeaderBrandLabelProps> = (props) => {
  return (
    <span {...props} class={cn(styles.headerBrandLabel(), props.class)}>
      {props.label}
    </span>
  );
};
