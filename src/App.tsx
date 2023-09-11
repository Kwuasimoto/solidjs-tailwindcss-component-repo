import { styleState } from "@style";
import { StyleStates } from "@types";
import { Component, onMount } from "solid-js";
import { lazily } from "solidjs-lazily";

const { AppNavigation } = lazily(() => import("./components/AppNavigation"));

const { Header } = lazily(() => import("./components/Header"));

const { AppContainer } = lazily(() => import("./components/AppContainer"));
const { CarouselSection } = lazily(
  () => import("./components/CarouselSection"),
);
const { ComponentSectionLayout } = lazily(
  () => import("./components/ComponentSectionLayout"),
);
const { FormSection } = lazily(() => import("./components/FormSection"));

const componentProjectName = "text-input";

const App: Component = () => {
  const darkModeStorageKey = `@solidjs-${componentProjectName}-dark-mode`;

  onMount(() => {
    const html = document.querySelector("html");
    const darkMode = localStorage.getItem(darkModeStorageKey);
    if (html instanceof HTMLHtmlElement) {
      if (darkMode === "dark-mode") {
        styleState.set(StyleStates.Dark);
      } else {
        localStorage.setItem(darkModeStorageKey, "dark-mode");
        window.location.reload();
      }
    }
  });

  return (
    <AppContainer>
      <Header />
      <AppNavigation />

      <ComponentSectionLayout>
        <CarouselSection />
        <FormSection />
      </ComponentSectionLayout>
    </AppContainer>
  );
};

export default App;
