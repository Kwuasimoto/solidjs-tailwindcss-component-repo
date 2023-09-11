import { CarouselSectionProps } from "@types";
import { Component } from "solid-js";
import { lazily } from "solidjs-lazily";

const { ComponentSection } = lazily(() => import("./ComponentSection"));
const { ComponentSectionDescription } = lazily(
  () => import("./ComponentSectionDescription"),
);
const { ComponentSectionHeader } = lazily(
  () => import("./ComponentSectionHeader"),
);
const { Text } = lazily(() => import("./Text"));

export const CarouselSection: Component<CarouselSectionProps> = (props) => {
  return (
    <ComponentSection aria-label="Carousel Example" {...props}>
      <ComponentSectionHeader>
        <Text>Carousel</Text>
      </ComponentSectionHeader>
      <ComponentSectionDescription>
        <Text>
          A carousel inspired by{" "}
          <a
            class="text-blue-700 dark:text-blue-300"
            href="https://www.youtube.com/watch?v=9HcxHDS2w1s"
          >
            Web Dev Simplified
          </a>
        </Text>
      </ComponentSectionDescription>
    </ComponentSection>
  );
};
