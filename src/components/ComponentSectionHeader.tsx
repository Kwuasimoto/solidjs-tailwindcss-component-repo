import { styles } from "@style";
import { ComponentSectionHeaderProps } from "@types";
import { Component } from "solid-js";
import { cn } from "../util/merge-clsx";

export const ComponentSectionHeader: Component<ComponentSectionHeaderProps> = (
  props,
) => {
  return (
    <div {...props} class={cn(styles.componentSectionHeader(), props.class)}>
      {props.children}
    </div>
  );
};
