import type { Component } from "solid-js";
import { onMount } from "solid-js";
import { styles, styleState } from "./state/styles";
import { StyleStates } from "@types";
import { Header } from "./components/Header";
import { TextInput } from "./components/TextInput";
import { InputError } from "./components/InputError";
import { InputLabel } from "./components/InputLabel";
import { InputControl } from "./components/InputControl";
import { Form } from "./components/Form";
import { AppNavigation } from "./components/AppNavigation";
import { cn } from "./util/merge-clsx";

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

      <AppNavigation class={cn("fixed mt-12 h-full w-[200px] bg-gray-700")} />

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
