import { styles } from "@style";
import { Component } from "solid-js";

export const Form: Component<any> = (props) => {
  return <form class={styles.form()}>{props.children}</form>;
};
