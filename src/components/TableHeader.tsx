import { TableHeaderProps } from "@types";
import { Component } from "solid-js";

export const TableHeader: Component<TableHeaderProps> = (props) => {
  return <th {...props}>{props.children}</th>;
};
