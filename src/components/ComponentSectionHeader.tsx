import { styles } from "@style";
import { ComponentSectionHeaderProps } from "@types";
import { cn } from "@util";
import { Component } from "solid-js";

export const ComponentSectionHeader: Component<ComponentSectionHeaderProps> = (
  props,
) => {
  return (
    <div {...props} class={cn(styles.componentSectionHeader(), props.class)}>
      {props.children}
    </div>
  );
};
