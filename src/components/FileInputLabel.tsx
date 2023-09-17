import { styles } from "@style";
import { FileInputLabelProps } from "@types";
import { cn } from "@util";
import { Component, JSX, Show, createSignal } from "solid-js";
import { lazily } from "solidjs-lazily";

const { IconifyIcon } = lazily(() => import("./IconifyIcon"));

export const FileInputLabel: Component<FileInputLabelProps> = (props) => {
  const [labelRef, setLabelRef] = createSignal<HTMLLabelElement>();
  const handleFileInputLabelEventPropagation: JSX.EventHandlerUnion<
    HTMLLabelElement,
    MouseEvent
  > = (e) => {
    e.stopPropagation();
    e.stopImmediatePropagation();
    labelRef()?.parentNode?.querySelector("input")?.click();
  };
  return (
    <label
      {...props}
      ref={setLabelRef}
      class={cn(styles.fileInputLabel())}
      onclick={handleFileInputLabelEventPropagation}
    >
      <Show
        when={props.showLabelText === false ? false : true}
        children={<span>Import CSV Data</span>}
      />
      <Show
        when={props.showLabelIcon === false ? false : true}
        children={
          <div
            class={cn(
              "flex items-center",
              props.showLabelText === false ? "ml-auto" : "",
            )}
          >
            <IconifyIcon
              icon={"mdi:cloud-upload"}
              height={"20px"}
              width={"20px"}
            />
          </div>
        }
      />
    </label>
  );
};
