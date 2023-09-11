import { styles } from "@style";
import { CarouselProps } from "@types";
import { Component } from "solid-js";
import { cn } from "../util/merge-clsx";

export const Carousel: Component<CarouselProps> = (props) => {
  return (
    <ul {...props} class={cn(styles.carousel(), props.class)}>
      {props.children}
    </ul>
  );
};
