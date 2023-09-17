import { FileTypes } from "@types";
import { parse } from "papaparse";
import { JSX } from "solid-js";

export type KeyedPapaParseCallback = {
  [key in FileTypes]: PapaParseCallback;
};

export type PapaParseCallback = (
  results: Papa.ParseResult<{ [key: string]: string }>,
  file: Papa.LocalFile,
) => void;

export const csvFileHandler = (file: File, complete: PapaParseCallback) => {
  parse<{ [key: string]: string }>(file, {
    header: true,
    skipEmptyLines: true,
    complete: complete,
  });
};

export const fileInputDelegator =
  (
    papaParseCallback: KeyedPapaParseCallback,
  ): JSX.ChangeEventHandlerUnion<HTMLInputElement, Event> =>
  (e) => {
    console.log("Attempting to parse file input");
    const files = e.target.files;
    if (!files) {
      console.log("Files cannot be null");
      return;
    }
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      switch (file.type) {
        case FileTypes.CSV: {
          csvFileHandler(file, papaParseCallback["text/csv"]);
          break;
        }
        default: {
          console.log("Unhandled file type", file.type);
        }
      }
    }
  };
