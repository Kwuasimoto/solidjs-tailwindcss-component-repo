import { styleState } from "@style";
import { StyleStates } from "@types";
import { Component, onMount } from "solid-js";
import { lazily } from "solidjs-lazily";

const { AppNavigation } = lazily(() => import("./components/AppNavigation"));
const { AppContainer } = lazily(() => import("./components/AppContainer"));

const { CarouselSection } = lazily(
  () => import("./components/CarouselSection"),
);
const { ComponentSectionLayout } = lazily(
  () => import("./components/ComponentSectionLayout"),
);
const { TableSection } = lazily(() => import("./components/TableSection"));

const { FormSection } = lazily(() => import("./components/FormSection"));
const { Header } = lazily(() => import("./components/Header"));

const App: Component = () => {
  onMount(() => {
    const html = document.querySelector("html");
    const darkMode = localStorage.getItem(styleState.key);
    if (html instanceof HTMLHtmlElement) {
      if (darkMode === "dark-mode") {
        styleState.set(StyleStates.Dark);
      } else {
        styleState.set(StyleStates.Light);
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
        <TableSection />
      </ComponentSectionLayout>
    </AppContainer>
  );
};

export default App;
