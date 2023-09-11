import { styleState } from "@style";
import { StyleStates } from "@types";
import { Component, onMount } from "solid-js";
import { lazily } from "solidjs-lazily";
import { AppContainer } from "./components/AppContainer";
import { ComponentSectionLayout } from "./components/ComponentSectionLayout";
import { FormSection } from "./components/FormSection";

const { AppNavigation } = lazily(() => import("./components/AppNavigation"));

const { Header } = lazily(() => import("./components/Header"));

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
        <FormSection />
      </ComponentSectionLayout>
    </AppContainer>
  );
};

export default App;
