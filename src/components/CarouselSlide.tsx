import { styles } from "@style";
import { CarouselItemProps } from "@types";
import { cn } from "@util";
import { Component } from "solid-js";

export const CarouselSlide: Component<CarouselItemProps> = (props) => {
  return (
    <li {...props} class={cn(styles.carouselSlide(), props.class)}>
      {props.children}
    </li>
  );
};
