import { styles } from "@style";
import { cn } from "@util";
import { Component, JSX } from "solid-js";
import { lazily } from "solidjs-lazily";

const { AppNavigationToggle } = lazily(() => import("./AppNavigationToggle"));
const { HeaderBrand } = lazily(() => import("./HeaderBrand"));
const { StyleStateToggle } = lazily(() => import("./StyleStateToggle"));

export const Header: Component<JSX.HTMLAttributes<any>> = (props) => {
  return (
    <div {...props} class={cn(styles.header(), props.class)}>
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
