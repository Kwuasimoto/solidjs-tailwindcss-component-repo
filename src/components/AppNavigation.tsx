import { Component, createSignal, onMount } from "solid-js";
import { AppNavigationProps } from "@types";
import { appMenuState } from "../state/app-menu.state";

export const AppNavigation: Component<AppNavigationProps> = (props) => {
  const [containerRef, setContainerRef] = createSignal(
    appMenuState.appMenuContainerRef,
  );

  onMount(() => {
    appMenuState.setAppMenuContainerRef(containerRef());

    if (appMenuState.appMenuOpen()) {
      containerRef()?.classList.add("border-r");
      containerRef()?.classList.add("border-r-black");
      containerRef()?.classList.remove("hidden");
    } else {
      containerRef()?.classList.add("left-[-240px]");
      containerRef()?.classList.add("hidden");
    }
  });

  return (
    <div
      class="fira-regular inset fixed z-[9998] flex h-full w-[240px] flex-col flex-col bg-gray-950 px-2 py-3 text-gray-500 shadow-md"
      ref={setContainerRef}
      {...props}
    ></div>
  );
};
