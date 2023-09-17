import { styles } from "@style";
import { TableProps } from "@types";
import { Component } from "solid-js";
import { cn } from "../util/merge-clsx";

export const Table: Component<TableProps> = (props) => {
  return (
    <table {...props} class={cn(styles.table())}>
      {props.children}
    </table>
  );
};
