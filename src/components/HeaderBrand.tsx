import { HeaderBrandProps } from "@types";
import { Component } from "solid-js";
import { cn } from "../util/merge-clsx";

export const HeaderBrand: Component<HeaderBrandProps> = (props) => {
  return (
    <div class={cn("mb-1 ml-2 flex w-full flex-col sm:flex-row")}>
      <span class={cn("mx-2 text-xs sm:ml-0 sm:text-sm lg:text-lg")}>
        SolidJS
      </span>
      <span class={cn("mx-2 hidden w-[1px] bg-gray-700 sm:block")} />
      <span class={cn("mx-2 text-xs sm:ml-0 sm:text-sm lg:text-lg")}>
        Components
      </span>
    </div>
  );
};
