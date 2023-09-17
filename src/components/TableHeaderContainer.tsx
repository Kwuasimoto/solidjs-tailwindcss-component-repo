import { TableHeaderContainerProps } from "@types";
import { Component } from "solid-js";

export const TableHeaderContainer: Component<TableHeaderContainerProps> = (
  props,
) => {
  return <tr {...props}>{/* Component content goes here */}</tr>;
};
