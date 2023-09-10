import { createStore } from "solid-js/store";

const [appMenuState, setAppMenuState] = createStore({
  appMenuKey: "solidjs-components-app-menu-open",
  appMenuWidth: "200px",
  appMenuContainerRef: <Element | undefined>undefined,
  appMenuOpen: () => localStorage.getItem(appMenuState.appMenuKey) === "true",
  setAppMenuContainerRef: (element: Element | undefined) => {
    setAppMenuState((prev) => ({ ...prev, appMenuContainerRef: element }));
  },
  toggleAppMenu: () => {
    const appMenu = appMenuState.appMenuContainerRef!;

    // Close App Menu
    if (appMenuState.appMenuOpen()) {
      appMenu.classList.add("animation-close-app-menu");
      appMenu.classList.remove("animation-open-app-menu");
    }

    // Open App Menu
    else {
      appMenu.classList.remove("hidden");
      appMenu.classList.add("animation-open-app-menu");
      appMenu.classList.remove("animation-close-app-menu");
      appMenu.classList.remove(`left-[-${appMenuState.appMenuWidth}px]`);
    }

    const currentAppMenuState = !appMenuState.appMenuOpen();
    setAppMenuState((prev) => ({
      ...prev,
      appMenuOpen: () => currentAppMenuState,
    }));

    localStorage.setItem(
      appMenuState.appMenuKey,
      `${appMenuState.appMenuOpen()}`,
    );
  },
});

export { appMenuState };
