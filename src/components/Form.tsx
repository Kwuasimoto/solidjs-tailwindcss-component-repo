import { styles } from "@style";
import { FormProps } from "@types";
import { Component } from "solid-js";

export const Form: Component<FormProps> = (props) => {
  return <form class={styles.form()}>{props.children}</form>;
};
