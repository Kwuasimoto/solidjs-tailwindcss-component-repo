import { styles } from "@style";
import { InputProps, PseudoClass } from "@types";
import { cn } from "@util";
import { Component, JSX, createEffect, createSignal } from "solid-js";
import { usePseudoClasses } from "../util/pseudo-classes";

export const TextInput: Component<InputProps> = (props) => {
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
    <input
      autocomplete={"off"}
      ref={setRef}
      class={cn(styles.input(pseudoClasses), "")}
      name={props.path}
      id={props.path}
      {...props}
    />
  );
};
