import { styles } from "@style";
import { CarouselSlideProps } from "@types";
import { cn } from "@util";
import { Component } from "solid-js";

export const CarouselSlide: Component<CarouselSlideProps> = (props) => {
  // The goal is to have access to index from Carousel.tsx <For></For> tag and
  // props.activeIndex from the Carousel.tsx props in this element so I can
  // do something like
  // if (props.index() === props.activeIndex()) data-active = true
  // on the li element.
  return (
    <li {...props} class={cn(styles.carouselSlide(), props.class)}>
      {props.children}
    </li>
  );
};
