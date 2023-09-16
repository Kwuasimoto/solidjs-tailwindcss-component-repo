import { PseudoClass } from "@types";
import { concat, without } from "lodash-es";
import { Accessor, JSX, createEffect, createSignal } from "solid-js";

export const usePseudoClasses = (
  classes: PseudoClass[],
  accessor: Accessor<JSX.Element>,
): { pseudoClasses: Accessor<PseudoClass[]> } => {
  const [pseudoClasses, setPseudoClasses] = createSignal<PseudoClass[]>([]);
  createEffect(() => {
    const element = accessor() as HTMLElement;
    if (element) {
      for (const cls of classes) {
        if (cls === PseudoClass.Hover) {
          element.addEventListener("mouseenter", (e) => {
            setPseudoClasses((prev) => [...concat(prev, PseudoClass.Hover)]);
          });
          element.addEventListener("mouseleave", (e) => {
            setPseudoClasses((prev) => [...without(prev, PseudoClass.Hover)]);
          });
        }
        if (cls === PseudoClass.Hover) {
          element.addEventListener("focusin", () => {
            setPseudoClasses((prev) => [...concat(prev, PseudoClass.Focus)]);
          });
          element.addEventListener("focusout", () => {
            setPseudoClasses((prev) => [...without(prev, PseudoClass.Focus)]);
          });
        }
      }
    }
  });

  return { pseudoClasses };
};
