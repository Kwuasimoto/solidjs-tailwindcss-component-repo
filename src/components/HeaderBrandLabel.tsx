import { HeaderBrandLabelProps } from "@types";
import { Component } from "solid-js";

export const HeaderBrandLabel: Component<HeaderBrandLabelProps> = (props) => {
  return <div>{props.label}</div>;
};
