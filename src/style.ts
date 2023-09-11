import { StylePseudoClass, StyleState, StyleStates, StyleStore } from "@types";
import { cn } from "@util";
import { createStore } from "solid-js/store";

const [styleState, setStyleState] = createStore<StyleState>({
  state: StyleStates.Dark,
  set: (state) => {
    const body = document.body;
    const html = document.querySelector("html")
    if (html instanceof HTMLHtmlElement && body instanceof HTMLBodyElement) {
      body.classList.add("bg-gray-300", "dark:bg-gray-900")
      if (state === StyleStates.Dark) {
        html.classList.add("dark");
        setStyleState((prev) => ({ ...prev, state: StyleStates.Dark }));
      } else {
        html.classList.remove("dark");
        setStyleState((prev) => ({ ...prev, state: StyleStates.Light }));
      }
    }
  },
});

const [styles, setStyles] = createStore<StyleStore>({
  app: () =>
    cn(
      "fira flex h-full flex-col bg-gray-300 h-full",
      "dark:bg-gray-900 dark:text-gray-300",
    ),
  appNavigation: () =>
    cn(
      "inset fixed mt-12 z-[998] border-r border-r-gray-400 flex h-full w-[240px] flex-col bg-gray-300 shadow-md",
      "dark:bg-gray-900 dark:border-r-gray-800",
    ),
  componentSection: () => cn("flex w-[66%] max-w-[500px] flex-col py-4"),
  componentSectionLayout: () =>
    cn("flex flex-col items-center justify-center py-4"),
  componentSectionHeader: () => cn("text-lg"),
  componentSectionDescription: () => cn("text-sm font-light"),
  header: () => cn("flex h-12 w-full items-end border-b border-b-gray-700"),
  headerBrand: () => cn("mb-1 ml-2 flex w-full flex-col sm:flex-row"),
  headerBrandLabel: () => cn("text-xs sm:ml-0 sm:text-sm lg:text-lg"),
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
  form: () => cn("flex flex-col rounded p-4 shadow-xl lg:w-full"),
});

export { setStyles, styleState, styles };
