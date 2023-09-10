import { styles } from "@styles";
import { Component, JSX } from "solid-js";
import { cn } from "../util/merge-clsx";
import { AppNavigationToggle } from "./AppNavigationToggle";
import { HeaderBrand } from "./HeaderBrand";
import { StyleStateToggle } from "./StyleStateToggle";

export const Header: Component<JSX.HTMLAttributes<any>> = (props) => {
  return (
    <div class={styles.header()} {...props}>
      <div class={cn("flex w-full items-center")}>
        <AppNavigationToggle />
        <HeaderBrand />
      </div>
      <StyleStateToggle />
      <div class={cn("mr-2 w-full text-end text-xs sm:text-sm lg:text-lg")}>
        Kwuasimoto
      </div>
    </div>
  );
};
