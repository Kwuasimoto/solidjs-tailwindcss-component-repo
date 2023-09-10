import { TextProps } from "@types";
import { Component } from "solid-js";

export const Text: Component<TextProps> = (props) => {
  return <div>{props.children}</div>;
};
