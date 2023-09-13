import { CarouselSectionProps } from "@types";
import { Component, createEffect, createSignal } from "solid-js";
import { lazily } from "solidjs-lazily";
import { cn } from "../util/merge-clsx";

const { Carousel } = lazily(() => import("./Carousel"));
const { CarouselSlide } = lazily(() => import("./CarouselSlide"));

const { Button } = lazily(() => import("./Button"));

const { ComponentSection } = lazily(() => import("./ComponentSection"));
const { ComponentSectionDescription } = lazily(
  () => import("./ComponentSectionDescription"),
);
const { ComponentSectionHeader } = lazily(
  () => import("./ComponentSectionHeader"),
);
const { Link } = lazily(() => import("./Link"));
const { Text } = lazily(() => import("./Text"));

export const CarouselSection: Component<CarouselSectionProps> = (props) => {
  const [activeIndex, setActiveIndex] = createSignal(0);
  createEffect(() => {
    console.log("Active index", activeIndex());
  });
  return (
    <ComponentSection aria-label="Carousel Example" {...props}>
      <ComponentSectionHeader>
        <Text>Carousel</Text>
      </ComponentSectionHeader>
      <ComponentSectionDescription>
        <Text>
          A carousel inspired by <a></a>
          <Link href="https://www.youtube.com/watch?v=9HcxHDS2w1s">
            Web Dev Simplified
          </Link>
        </Text>
      </ComponentSectionDescription>
      <Carousel activeIndex={activeIndex}>
        <CarouselSlide>Slide A</CarouselSlide>
        <CarouselSlide>Slide B</CarouselSlide>
        <CarouselSlide>Slide C</CarouselSlide>
      </Carousel>
      <div class={cn("flex w-full justify-between px-1 pt-4")}>
        <Button
          onclick={() => {
            if (activeIndex() > 0) setActiveIndex((prev) => --prev);
          }}
        >
          Prev
        </Button>
        <Button
          onclick={() => {
            if (activeIndex() < 2) setActiveIndex((prev) => ++prev);
          }}
        >
          Next
        </Button>
      </div>
    </ComponentSection>
  );
};
