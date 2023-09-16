import { styles } from "@style";
import { FileInputLabelProps } from "@types";
import { cn } from "@util";
import { Component, JSX, Show } from "solid-js";
import { lazily } from "solidjs-lazily";

const { IconifyIcon } = lazily(() => import("./IconifyIcon"));

export const FileInputLabel: Component<FileInputLabelProps> = (props) => {
  const handleFileInputLabelEventPropagation: JSX.EventHandlerUnion<
    HTMLLabelElement,
    MouseEvent
  > = (e) => {
    e.stopPropagation();
    e.stopImmediatePropagation();
  };
  return (
    <label
      {...props}
      for="file-input"
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
