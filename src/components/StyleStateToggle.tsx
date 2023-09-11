import { styleState } from "@style";
import { StyleStateToggleProps, StyleStates } from "@types";
import { Component } from "solid-js";

export const StyleStateToggle: Component<StyleStateToggleProps> = (props) => {
  return (
    <div class="mb-1 flex w-full justify-center text-sm lg:text-[1rem]">
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
