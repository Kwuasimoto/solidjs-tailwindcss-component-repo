import { Component } from "solid-js";
import { appMenuState } from "../state/app-menu.state";
import { IconifyIcon } from "./IconifyIcon";
import { AppNavigationToggleProps } from "@types";
import { cn } from "../util/merge-clsx";

export const AppNavigationToggle: Component<AppNavigationToggleProps> = (
  props,
) => {
  const toggleNavigationContainerElement = () => {
    appMenuState.toggleAppMenu();
  };

  return (
    <div
      onclick={toggleNavigationContainerElement}
      class={cn("ml-2 cursor-pointer self-center text-lg lg:mt-1 lg:text-xl")}
      {...props}
    >
      <IconifyIcon icon={"material-symbols:menu"} />
    </div>
  );
};
