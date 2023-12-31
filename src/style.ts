import { PseudoClass, StyleState, StyleStates, StyleStore } from "@types";
import { cn } from "@util";
import { Accessor } from "solid-js";
import { createStore } from "solid-js/store";

const projectName = "components";

const [styleState, setStyleState] = createStore<StyleState>({
  state: StyleStates.Dark,
  key: `@solidjs-${projectName}-dark-mode`,
  set: (state) => {
    const body = document.body;
    const html = document.querySelector("html");
    if (html instanceof HTMLHtmlElement && body instanceof HTMLBodyElement) {
      body.classList.add("bg-gray-300", "dark:bg-gray-900");
      if (state === StyleStates.Dark) {
        html.classList.add("dark");
        setStyleState((prev) => ({ ...prev, state: StyleStates.Dark }));
        localStorage.setItem(styleState.key, "dark-mode");
      } else {
        html.classList.remove("dark");
        setStyleState((prev) => ({ ...prev, state: StyleStates.Light }));
        localStorage.setItem(styleState.key, "light-mode");
      }
    }
  },
});

const basePseudoStyles = (pseudoClasses?: Accessor<PseudoClass[]>) => {
  return {
    ["border-gray-600"]:
      pseudoClasses && pseudoClasses().includes(PseudoClass.Focus),
    ["dark:border-gray-400"]:
      pseudoClasses && pseudoClasses().includes(PseudoClass.Focus),
    ["border-gray-800"]:
      pseudoClasses && pseudoClasses().includes(PseudoClass.Hover),
    ["dark:border-gray-200"]:
      pseudoClasses && pseudoClasses().includes(PseudoClass.Hover),
  };
};

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
  appNavigationToggle: () =>
    cn("ml-2 flex items-center cursor-pointer self-center text-lg lg:text-2xl"),
  button: (pseudoClasses) =>
    cn(
      "px-2 border border-gray-400 rounded shadow",
      "dark:bg-gray-800 dark:border-gray-700",
      basePseudoStyles(pseudoClasses),
    ),
  carousel: () => cn("relative h-96"),
  carouselSlide: () => cn("h-96 py-2 px-4 rounded"),
  carouselSlideContainer: () =>
    cn(
      "opacity-0 min-h-[100%] data-[active=true]:opacity-100 absolute inset-0 shadow-lg rounded",
    ),
  componentSection: () =>
    cn("flex w-[66%] max-w-[500px] flex-col py-4 overflow-x-auto"),
  componentSectionLayout: () =>
    cn("flex flex-col min-h-[100%] items-center justify-center py-4"),
  componentSectionHeader: () => cn("text-lg"),
  componentSectionDescription: () => cn("text-sm font-light pb-2"),
  header: () => cn("flex h-12 w-full items-end border-b border-b-gray-700"),
  headerBrand: () => cn("ml-2 flex w-full flex-col sm:flex-row"),
  headerBrandLabel: () => cn("text-xs sm:ml-0 sm:text-sm lg:text-lg"),
  input: (pseudoClasses) =>
    cn(
      "rounded border border-gray-400 bg-gray-300 px-3 py-2 text-sm font-light outline-none",
      "dark:bg-gray-800 dark:border-gray-700",
      basePseudoStyles(pseudoClasses),
    ),
  inputError: () => cn("h-6 pr-1 pt-0.5 text-end text-sm text-red-700"),
  inputLabel: () => cn("pl-1 font-light"),
  inputControl: () => cn("flex w-full flex-col self-center px-4"),
  link: () => cn("text-blue-700", "dark:text-blue-300"),
  fileInput: (pseudoClasses) =>
    cn(
      "rounded border border-gray-400 bg-gray-300 px-3 py-2 text-sm font-light outline-none",
      "dark:bg-gray-800 dark:border-gray-700",
      basePseudoStyles(pseudoClasses),
    ),
  fileInputLabel: () => cn("flex items-center justify-between"),
  fileInputLabelFallback: () => cn("flex items-center justify-end"),
  form: () => cn("flex flex-col rounded p-4 shadow-xl lg:w-full"),
  table: () => cn("max-h-[500px] min-h-[300px] shadow-xl overflow-y-auto"),
});

export { setStyles, styleState, styles };
