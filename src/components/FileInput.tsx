import { styles } from "@style";
import { FileInputProps, PseudoClass } from "@types";
import { Component, JSX, Show, createSignal } from "solid-js";
import { lazily } from "solidjs-lazily";
import { cn } from "../util/merge-clsx";
import { usePseudoClasses } from "../util/pseudo-classes";

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
  const [inputFiles, setInputFiles] = createSignal<File[]>();
  const handleFileInput: JSX.EventHandlerUnion<
    HTMLDivElement,
    MouseEvent
  > = () => {
    fileInputRef()?.click();
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
      <input id="file-input" class="h-full w-full" type="file" hidden />
    </div>
  );
};
