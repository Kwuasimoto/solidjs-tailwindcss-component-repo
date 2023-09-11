import { styles } from "@style";
import { ComponentSectionLayoutProps } from "@types";
import { cn } from "@util";
import { Component } from "solid-js";

export const ComponentSectionLayout: Component<ComponentSectionLayoutProps> = (
  props,
) => {
  return (
    <div {...props} class={cn(styles.componentSectionLayout(), props.class)}>
      {props.children}
    </div>
  );
};
