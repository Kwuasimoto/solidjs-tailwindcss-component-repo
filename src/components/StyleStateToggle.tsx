import { StyleStateToggleProps, StyleStates } from "@types";
import { Component } from "solid-js";
import { styleState } from "../state/styles";

export const StyleStateToggle: Component<StyleStateToggleProps> = (props) => {
  return (
    <div class="flex w-full justify-center text-sm lg:text-[1rem]">
      <button
        onclick={() => {
          styleState.state === StyleStates.Light
            ? styleState.set(StyleStates.Dark)
            : styleState.set(StyleStates.Light);
        }}
      >
        Light / Dark
      </button>
    </div>
  );
};
