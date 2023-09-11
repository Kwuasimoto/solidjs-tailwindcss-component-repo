import { appMenuState } from "@state";
import { styles } from "@style";
import { AppNavigationToggleProps } from "@types";
import { cn } from "@util";
import { Component } from "solid-js";
import { lazily } from "solidjs-lazily";

const { IconifyIcon } = lazily(() => import("./IconifyIcon"));

export const AppNavigationToggle: Component<AppNavigationToggleProps> = (
  props,
) => {
  const toggleNavigationContainerElement = () => {
    appMenuState.toggleAppMenu();
  };

  return (
    <div
      onclick={toggleNavigationContainerElement}
      {...props}
      class={cn(styles.appNavigationToggle(), props.class)}
    >
      <IconifyIcon icon={"material-symbols:menu"} />
    </div>
  );
};
