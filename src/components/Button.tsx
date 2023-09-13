import { styles } from "@style";
import { ButtonProps, StylePseudoClass } from "@types";
import { concat, without } from "lodash-es";
import { Component, createSignal } from "solid-js";
import { cn } from "../util/merge-clsx";

export const Button: Component<ButtonProps> = (props) => {
  const [pseudoClasses, setPseudoClasses] = createSignal<StylePseudoClass[]>(
    [],
  );
  return (
    <button
      onmouseenter={() => {
        setPseudoClasses((prev) => [...concat(prev, StylePseudoClass.Hover)]);
      }}
      onmouseleave={() => {
        setPseudoClasses((prev) => [...without(prev, StylePseudoClass.Hover)]);
      }}
      onfocusin={() => {
        setPseudoClasses((prev) => [...concat(prev, StylePseudoClass.Focus)]);
      }}
      onfocusout={() => {
        setPseudoClasses((prev) => [...without(prev, StylePseudoClass.Focus)]);
      }}
      {...props}
      class={cn(styles.button(pseudoClasses), props.class)}
    >
      {props.children}
    </button>
  );
};
