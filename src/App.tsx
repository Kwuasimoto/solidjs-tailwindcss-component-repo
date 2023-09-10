import { styles, styleState } from "@style";
import { StyleStates } from "@types";
import { Component, onMount } from "solid-js";
import { lazily } from "solidjs-lazily";

const { AppNavigation } = lazily(() => import("./components/AppNavigation"));
const { Form } = lazily(() => import("./components/Form"));
const { Header } = lazily(() => import("./components/Header"));
const { InputControl } = lazily(() => import("./components/InputControl"));
const { InputError } = lazily(() => import("./components/InputError"));
const { InputLabel } = lazily(() => import("./components/InputLabel"));
const { TextInput } = lazily(() => import("./components/TextInput"));

const componentProjectName = "text-input";

const App: Component = () => {
  const darkModeStorageKey = `@solidjs-${componentProjectName}-dark-mode`;

  onMount(() => {
    const html = document.querySelector("html");
    const darkMode = localStorage.getItem(darkModeStorageKey);
    if (darkMode === "dark-mode" && html instanceof HTMLElement) {
      styleState.set(StyleStates.Dark);
    } else {
      localStorage.setItem(darkModeStorageKey, "dark-mode");
      window.location.reload();
    }
  });

  return (
    <div id="app" class={styles.app()}>
      <Header />

      <AppNavigation />

      <Form>
        <InputControl>
          <InputLabel label={"Enter an email"} />
          <TextInput path={""} />
          <InputError />
        </InputControl>
      </Form>
    </div>
  );
};

export default App;
