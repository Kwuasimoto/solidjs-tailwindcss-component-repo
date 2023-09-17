import { styles } from "@style";
import { FileInputProps, PseudoClass } from "@types";
import { cn, usePseudoClasses } from "@util";
import { Component, JSX, Show, createSignal } from "solid-js";
import { lazily } from "solidjs-lazily";

const { FileInputLabel } = lazily(() => import("./FileInputLabel"));
// const { FileInputLabelFallback } = lazily(
//   () => import("./FileInputLabelFallback"),
// );

export const FileInput: Component<FileInputProps> = (props) => {
  const [fileInputRef, setFileInputRef] = createSignal<HTMLInputElement>();
  const { pseudoClasses } = usePseudoClasses(
    [PseudoClass.Hover, PseudoClass.Focus],
    fileInputRef,
  );
  const handleFileInput: JSX.EventHandlerUnion<HTMLDivElement, MouseEvent> = (
    e,
  ) => {
    e.stopPropagation();
    e.stopImmediatePropagation();
    fileInputRef()?.querySelector("input")?.click();
  };
  return (
    <div
      {...props}
      class={cn(styles.fileInput(pseudoClasses), props.class)}
      onclick={handleFileInput}
      ref={setFileInputRef}
    >
      <Show
        when={props.defaultLabel === false ? false : true}
        children={<FileInputLabel {...props.fileInputLabelProps} />}
      />
      <input
        onchange={props.onFileChange}
        class="h-full w-full"
        type="file"
        hidden
      />
    </div>
  );
};
