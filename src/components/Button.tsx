import { styles } from "@style";
import { ButtonProps, StylePseudoClass } from "@types";
import { cn } from "@util";
import { concat, without } from "lodash-es";
import { Component, JSX, createEffect, createSignal } from "solid-js";

export const Button: Component<ButtonProps> = (props) => {
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
      ref={setRef}
    >
      {props.children}
    </button>
  );
};
