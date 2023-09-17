import { TableDataRowProps } from "@types";
import { Component } from "solid-js";

export const TableDataRow: Component<TableDataRowProps> = (props) => {
  return <tr {...props}>{props.children}</tr>;
};
