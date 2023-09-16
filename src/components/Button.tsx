import { styles } from "@style";
import { ButtonProps, PseudoClass } from "@types";
import { cn, usePseudoClasses } from "@util";
import { Component, JSX, createEffect, createSignal } from "solid-js";

export const Button: Component<ButtonProps> = (props) => {
  const [ref, setRef] = createSignal<JSX.Element>();
  const { pseudoClasses } = usePseudoClasses(
    [PseudoClass.Focus, PseudoClass.Hover],
    ref,
  );

  createEffect(() => {
    if (ref() && props.componentRef) {
      props.componentRef(ref);
    }
  });
  return (
    <button
      {...props}
      class={cn(styles.button(pseudoClasses), props.class)}
      ref={setRef}
    >
      {props.children}
    </button>
  );
};
