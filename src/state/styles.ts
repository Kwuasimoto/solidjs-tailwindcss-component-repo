import { createStore } from "solid-js/store";
import { cn } from "../util/merge-clsx";
import { StylePseudoClass, StyleState, StyleStates, StyleStore } from "@types";

const [styleState, setStyleState] = createStore<StyleState>({
  state: StyleStates.Dark,
  set: (state) => {
    const body = document.body;
    if (body instanceof HTMLBodyElement) {
      if (state === StyleStates.Dark) {
        body.classList.add("dark");
        setStyleState((prev) => ({ ...prev, state: StyleStates.Dark }));
      } else {
        body.classList.remove("dark");
        setStyleState((prev) => ({ ...prev, state: StyleStates.Light }));
      }
    }
  },
});

const [styles, setStyles] = createStore<StyleStore>({
  app: () =>
    cn(
      "fira flex h-full flex-col bg-gray-300",
      "dark:bg-gray-900 dark:text-gray-300",
    ),
  header: (pseudoClasses) =>
    cn("flex h-12 w-full items-end border-b border-b-gray-700"),
  headerBrand: (pseudoClasses) => cn(),
  headerBrandLabel: (pseudoClasses) => cn(),
  input: (pseudoClasses) =>
    cn(
      "rounded border border-gray-400 bg-gray-300 px-3 py-2 text-sm font-light outline-none",
      "dark:bg-gray-800 dark:border-gray-700",
      {
        ["border-gray-600"]:
          pseudoClasses && pseudoClasses().includes(StylePseudoClass.Focus),
        ["dark:border-gray-400"]:
          pseudoClasses && pseudoClasses().includes(StylePseudoClass.Focus),
        ["border-gray-800"]:
          pseudoClasses && pseudoClasses().includes(StylePseudoClass.Hover),
        ["dark:border-gray-200"]:
          pseudoClasses && pseudoClasses().includes(StylePseudoClass.Hover),
      },
    ),
  inputError: () => cn("h-6 pr-1 pt-0.5 text-end text-sm text-red-700"),
  inputLabel: () => cn("pl-1 font-light"),
  inputControl: () => cn("flex w-full flex-col self-center p-4"),
  form: () =>
    cn(
      "mx-auto mt-12 flex w-[66%] max-w-[500px] flex-col rounded p-4 shadow-xl lg:w-[33%]",
    ),
});

export { styles, styleState, setStyles };
