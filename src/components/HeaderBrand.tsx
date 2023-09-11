import { styles } from "@style";
import { HeaderBrandProps } from "@types";
import { cn } from "@util";
import { Component } from "solid-js";
import { lazily } from "solidjs-lazily";

const { HeaderBrandLabel } = lazily(() => import("./HeaderBrandLabel"));

export const HeaderBrand: Component<HeaderBrandProps> = (props) => {
  return (
    <div {...props} class={cn(styles.headerBrand(), props.class)}>
      <HeaderBrandLabel label="SolidJS" />
      <span class={cn("mx-2 hidden w-[1px] bg-gray-700 sm:block")} />
      <HeaderBrandLabel label="Components" />
    </div>
  );
};
