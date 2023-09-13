import { styles } from "@style";
import { CarouselSlideProps } from "@types";
import { cn } from "@util";
import { Component } from "solid-js";

export const CarouselSlide: Component<CarouselSlideProps> = (props) => {
  return (
    <li {...props} class={cn(styles.carouselSlide(), props.class)}>
      {props.children}
    </li>
  );
};
