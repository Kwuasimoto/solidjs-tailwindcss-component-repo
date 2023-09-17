import { TableDataProps } from "@types";
import { Component } from "solid-js";

export const TableData: Component<TableDataProps> = (props) => {
  return <td {...props}>{props.children}</td>;
};
