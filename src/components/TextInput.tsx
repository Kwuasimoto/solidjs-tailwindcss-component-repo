import { InputProps, StylePseudoClass } from "@types";
import { concat, without } from "lodash-es";
import { Component, createEffect, createSignal, JSX } from "solid-js";
import { styles } from "../styles";
import { cn } from "../util/merge-clsx";

export const TextInput: Component<InputProps> = (props) => {
  const [pseudoClasses, setPseudoClasses] = createSignal<StylePseudoClass[]>(
    [],
  );
  const [ref, setRef] = createSignal<JSX.Element>();

  createEffect(() => {
    if (ref() && props.refCallback) {
      props.refCallback(ref);
    }
  });

  return (
    <input
      autocomplete={"off"}
      ref={setRef}
      class={cn(styles.input(pseudoClasses), "")}
      name={props.path}
      id={props.path}
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
    />
  );
};
