import { styles } from "@style";
import { ComponentSectionProps } from "@types";
import { cn } from "@util";
import { Component, JSX, createSignal, onMount } from "solid-js";

export const ComponentSection: Component<ComponentSectionProps> = (props) => {
  const [ref, setRef] = createSignal<JSX.Element>();
  onMount(() => {
    if (ref() && props.componentRef) props.componentRef(ref);
  });
  return (
    <div
      ref={setRef}
      {...props}
      class={cn(styles.componentSection(), props.class)}
    >
      {props.children}
    </div>
  );
};
