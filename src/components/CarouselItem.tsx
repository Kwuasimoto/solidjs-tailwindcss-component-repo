import { styles } from "@style";
import { CarouselItemProps } from "@types";
import { Component } from "solid-js";
import { cn } from "../util/merge-clsx";

export const CarouselItem: Component<CarouselItemProps> = (props) => {
  return (
    <li {...props} class={cn(styles.carouselItem(), props.class)}>
      {props.children}
    </li>
  );
};
