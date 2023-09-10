import { Component } from "solid-js";
import { AppContainerProps } from "@types";

export const AppContainer: Component<AppContainerProps> = (props) => {
  return <div>{props.children}</div>;
};
