import { Component } from "solid-js";
import { styles } from "../styles";

export const Form: Component<any> = (props) => {
  return <form class={styles.form()}>{props.children}</form>;
};
