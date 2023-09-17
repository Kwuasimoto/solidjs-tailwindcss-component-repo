import { TableHeaderRowProps } from "@types";
import { Component } from "solid-js";

export const TableHeaderRow: Component<TableHeaderRowProps> = (props) => {
  return <tr {...props}>{/* Component content goes here */}</tr>;
};
