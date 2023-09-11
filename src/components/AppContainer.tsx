import { styles } from "@style";
import { AppContainerProps } from "@types";
import { cn } from "@util";
import { Component } from "solid-js";

export const AppContainer: Component<AppContainerProps> = (props) => {
  return (
    <div id="app" {...props} class={cn(styles.app(), props.style)}>
      {props.children}
    </div>
  );
};
