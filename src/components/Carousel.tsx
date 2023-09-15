import { styles } from "@style";
import { CarouselProps } from "@types";
import { cn } from "@util";
import { Component, For } from "solid-js";

/**
 * Each carousel will have n number of child elements, these are suspected to be
 * CarouselSlide Elements.
 *
 * @param props
 * @returns
 */
export const Carousel: Component<CarouselProps> = (props) => {
  const children = props.children as HTMLDivElement[];
  return (
    <ul {...props} class={cn(styles.carousel(), props.class)}>
      <For each={children}>
        {(item, index) => {
          return (
            <li
              class={cn(styles.carouselSlideContainer())}
              data-active={index() === props.activeIndex()}
            >
              {item}
            </li>
          );
        }}
      </For>
    </ul>
  );
};
