import { styles } from "@style";
import { LinkProps } from "@types";
import { Component } from "solid-js";
import { cn } from "../util/merge-clsx";

export const Link: Component<LinkProps> = (props) => {
  return (
    <a {...props} class={cn(styles.link(), props.class)}>
      {props.children}
    </a>
  );
};
