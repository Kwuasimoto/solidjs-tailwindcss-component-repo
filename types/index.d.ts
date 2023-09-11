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

export enum StylePseudoClass {
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
  set: (state: StyleStates) => void;
}

export interface StyleStore {
  [key: string]: (pseudoClasses?: Accessor<StylePseudoClass[]>) => string;
}

export type AppNavigationProps = JSXAttributes;
export type AppNavigationToggleProps = JSXAttributes;
export type AppContainerProps = JSXAttributes;

export type CarouselProps = JSXAttributes;
export type CarouselSectionProps = JSXAttributes;
export type CarouselItemProps = JSXAttributes;

export type ComponentSectionLayoutProps = JSXAttributes;
export type ComponentSectionProps = JSXAttributes;
export type ComponentSectionDescriptionProps = JSXAttributes;
export type ComponentSectionHeaderProps = JSXAttributes;

export type FormProps = JSXAttributes;

export type HeaderProps = JSXAttributes;
export type HeaderBrandProps = JSXAttributes;
export type HeaderBrandLabelProps = JSXAttributes<HTMLSpanElement> & {
  label: string;
};

export interface JSXAttributes<T = HTMLDivElement>
  extends JSX.InputHTMLAttributes<T> {
  componentRef?: (ref: Accessor<JSX.Element>) => void;
  componentRefs?: (ref: Accessor<JSX.Element[]>) => void;
}

export type InputProps = JSXAttributes<HTMLInputElement> & {
  path: string;
};

export type InputControlProps = JSXAttributes;

export type InputLabelProps = JSXAttributes<HTMLSpanElement> & {
  label: string;
};

export type InputErrorProps = JSXAttributes & {
  error?: string;
};

export type IconProps = IconifyIconProps;

export type TextProps = JSXAttributes;
export type TextInputSectionProps = JSXAttributes;
