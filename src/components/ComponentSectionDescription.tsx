import { styles } from "@style";
import { ComponentSectionDescriptionProps } from "@types";
import { cn } from "@util";
import { Component } from "solid-js";

export const ComponentSectionDescription: Component<
  ComponentSectionDescriptionProps
> = (props) => {
  return (
    <div
      {...props}
      class={cn(styles.componentSectionDescription(), props.class)}
    >
      {props.children}
    </div>
  );
};
