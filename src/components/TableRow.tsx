import { TableRowProps } from "@types";
import { Component } from "solid-js";

export const TableRow: Component<TableRowProps> = (props) => {
  return <tr {...props}>{props.children}</tr>;
};
