import { styles } from "@style";
import { ComponentSectionLayoutProps } from "@types";
import { Component } from "solid-js";
import { cn } from "../util/merge-clsx";

export const ComponentSectionLayout: Component<ComponentSectionLayoutProps> = (
  props,
) => {
  return (
    <div {...props} class={cn(styles.componentSectionLayout(), props.class)}>
      {props.children}
    </div>
  );
};
