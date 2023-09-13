import { styles } from "@style";
import { CarouselSlideContainerProps } from "@types";
import { Component } from "solid-js";
import { cn } from "../util/merge-clsx";

export const CarouselSlideContainer: Component<CarouselSlideContainerProps> = (
  props,
) => {
  return (
    <div
      {...props}
      class={cn(styles.carouselSlideContainer(), props.class)}
      data-active={props.active()}
    >
      {props.children}
    </div>
  );
};
