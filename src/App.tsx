import { StyleStates } from "@types";
import type { Component } from "solid-js";
import { onMount } from "solid-js";
import { AppNavigation } from "./components/AppNavigation";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { InputControl } from "./components/InputControl";
import { InputError } from "./components/InputError";
import { InputLabel } from "./components/InputLabel";
import { TextInput } from "./components/TextInput";
import { styles, styleState } from "./styles";

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
