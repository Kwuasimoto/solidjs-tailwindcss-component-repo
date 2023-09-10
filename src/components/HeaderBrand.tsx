import { styles } from "@styles";
import { HeaderBrandProps } from "@types";
import { Component } from "solid-js";
import { cn } from "../util/merge-clsx";
import { HeaderBrandLabel } from "./HeaderBrandLabel";

export const HeaderBrand: Component<HeaderBrandProps> = (props) => {
  return (
    <div class={styles.headerBrand()}>
      <HeaderBrandLabel label="SolidJS" />
      <span class={cn("mx-2 hidden w-[1px] bg-gray-700 sm:block")} />
      <HeaderBrandLabel label="Components" />
    </div>
  );
};
