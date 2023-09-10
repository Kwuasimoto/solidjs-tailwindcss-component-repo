import { appMenuState } from "@state";
import { styles } from "@style";
import { AppNavigationProps } from "@types";
import { Component, createSignal, onMount } from "solid-js";

export const AppNavigation: Component<AppNavigationProps> = (props) => {
  const [containerRef, setContainerRef] = createSignal(
    appMenuState.appMenuContainerRef,
  );

  onMount(() => {
    appMenuState.setAppMenuContainerRef(containerRef());

    if (appMenuState.appMenuOpen()) {
      containerRef()?.classList.remove("hidden");
    } else {
      containerRef()?.classList.add("left-[-240px]");
      containerRef()?.classList.add("hidden");
    }
  });

  return (
    <div class={styles.appNavigation()} ref={setContainerRef} {...props}></div>
  );
};
