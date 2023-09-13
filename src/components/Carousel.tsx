import { styles } from "@style";
import { CarouselProps } from "@types";
import { cn } from "@util";
import { Component, For } from "solid-js";
import { lazily } from "solidjs-lazily";

const { CarouselSlideContainer } = lazily(
  () => import("./CarouselSlideContainer"),
);

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
          // console.log("Is Active", active());
          return (
            <CarouselSlideContainer
              data-active={index() === props.activeIndex()}
            >
              {item}
            </CarouselSlideContainer>
          );
        }}
      </For>
    </ul>
  );
};
