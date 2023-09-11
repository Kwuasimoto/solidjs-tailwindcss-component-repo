import { styles } from "@style";
import { InputProps, StylePseudoClass } from "@types";
import { cn } from "@util";
import { concat, without } from "lodash-es";
import { Component, JSX, createEffect, createSignal } from "solid-js";

export const TextInput: Component<InputProps> = (props) => {
  const [pseudoClasses, setPseudoClasses] = createSignal<StylePseudoClass[]>(
    [],
  );
  const [ref, setRef] = createSignal<JSX.Element>();

  createEffect(() => {
    if (ref() && props.componentRef) {
      props.componentRef(ref);
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
