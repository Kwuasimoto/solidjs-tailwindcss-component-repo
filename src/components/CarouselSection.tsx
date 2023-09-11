import { CarouselSectionProps } from "@types";
import { Component } from "solid-js";
import { lazily } from "solidjs-lazily";

const { Carousel } = lazily(() => import("./Carousel"));
const { CarouselSlide } = lazily(() => import("./CarouselSlide"));

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
      <Carousel>
        <CarouselSlide data-active>Slide A</CarouselSlide>
        <CarouselSlide>Slide B</CarouselSlide>
        <CarouselSlide>Slide C</CarouselSlide>
      </Carousel>
    </ComponentSection>
  );
};
