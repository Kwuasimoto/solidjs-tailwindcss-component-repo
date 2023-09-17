import { IconifyIconProps } from "@iconify/react";
import { Accessor, JSX } from "solid-js";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": IconifyIconProps;
    }
  }
}

export type StyleStateToggleProps = JSXAttributes;

export enum FileTypes {
  CSV = "text/csv",
}

export enum PseudoClass {
  Hover = "hover",
  Active = "active",
  Focus = "focus",
}

export enum StyleStates {
  Dark = "dark",
  Light = "light",
}

export interface StyleState {
  state: StyleStates;
  key: string;
  set: (state: StyleStates) => void;
}

export interface StyleStore {
  [key: string]: (pseudoClasses?: Accessor<PseudoClass[]>) => string;
}

export type AppNavigationProps = JSXAttributes;
export type AppNavigationToggleProps = JSXAttributes;
export type AppContainerProps = JSXAttributes;

export type ButtonProps = JSXAttributes<HTMLButtonElement>;

export type CarouselProps = JSXAttributes<HTMLUListElement> & {
  activeIndex: Accessor<number>;
};
export type CarouselSlideProps = JSXAttributes<HTMLDivElement>;
export type CarouselSectionProps = JSXAttributes;
export type CarouselSlideContainerProps = JSXAttributes & {
  ["data-active"]: boolean;
};

export type ComponentSectionLayoutProps = JSXAttributes;
export type ComponentSectionProps = JSXAttributes;
export type ComponentSectionDescriptionProps = JSXAttributes;
export type ComponentSectionHeaderProps = JSXAttributes;

export type FormProps = JSXAttributes;
export type FileInputProps = JSXAttributes<HTMLDivElement> & {
  accept?: string;
  defaultLabel?: boolean;
  fileInputLabelProps?: FileInputLabelProps;
  onFileChange?: JSX.ChangeEventHandlerUnion<HTMLInputElement, Event>;
};
export type FileInputLabelProps = JSXAttributes<HTMLLabelElement> & {
  showLabelText?: boolean;
  showLabelIcon?: boolean;
};

export type HeaderProps = JSXAttributes;
export type HeaderBrandProps = JSXAttributes;
export type HeaderBrandLabelProps = JSXAttributes<HTMLSpanElement> & {
  label: string;
};

export interface JSXAttributes<T extends HTMLElement = HTMLElement>
  extends JSX.HTMLAttributes<T> {
  componentRef?: (ref: Accessor<JSX.Element>) => void;
  componentRefs?: (ref: Accessor<JSX.Element[]>) => void;
}

export type InputProps = JSXAttributes<HTMLInputElement> & {
  path: string;
};

export type LinkProps = JSXAttributes<HTMLAnchorElement> & {
  href: string;
};

export type InputControlProps = JSXAttributes;

export type InputLabelProps = JSXAttributes<HTMLLabelElement> & {
  label: string;
};

export type InputErrorProps = JSXAttributes & {
  error?: string;
};

export type IconProps = IconifyIconProps;

export type TableSectionProps = JSXAttributes;
export type TableProps = JSXAttributes<HTMLTableElement>;
export type TableHeaderRowProps = JSXAttributes<HTMLTableRowElement>;
export type TableHeaderProps = JSXAttributes<HTMLTableCellElement>;
export type TableDataProps = JSXAttributes<HTMLTableCellElement>;
export type TableDataRowProps = JSXAttributes<HTMLTableRowElement>;

export type TextProps = JSXAttributes;
export type TextInputSectionProps = JSXAttributes;
