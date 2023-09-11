import { styles } from "@style";
import { CarouselSectionProps } from "@types";
import { Component } from "solid-js";
import { cn } from "../util/merge-clsx";

export const CarouselSection: Component<CarouselSectionProps> = (props) => {
  return (
    <div
      aria-label="Carousel Example"
      {...props}
      class={cn(styles.carouselSection(), props.class)}
    ></div>
  );
};
