import { JSXAttributes } from "@types";
import { Component } from "solid-js";
import { lazily } from "solidjs-lazily";

const { Form } = lazily(() => import("./Form"));
const { InputControl } = lazily(() => import("./InputControl"));
const { InputError } = lazily(() => import("./InputError"));
const { InputLabel } = lazily(() => import("./InputLabel"));
const { TextInput } = lazily(() => import("./TextInput"));
const { Text } = lazily(() => import("./Text"));

const { ComponentSection } = lazily(() => import("./ComponentSection"));
const { ComponentSectionDescription } = lazily(
  () => import("./ComponentSectionDescription"),
);
const { ComponentSectionHeader } = lazily(
  () => import("./ComponentSectionHeader"),
);

export type FormSectionProps = JSXAttributes;

export const FormSection: Component<FormSectionProps> = (props) => {
  return (
    <ComponentSection {...props}>
      <ComponentSectionHeader>
        <Text>Forms</Text>
      </ComponentSectionHeader>
      <ComponentSectionDescription>
        <Text>A Form that utilizes reactive state.</Text>
      </ComponentSectionDescription>
      <Form>
        <InputControl>
          <InputLabel label={"Username"} />
          <TextInput path={""} />
          <InputError />
        </InputControl>
        <InputControl>
          <InputLabel label={"Email"} />
          <TextInput path={""} />
          <InputError />
        </InputControl>
        <InputControl>
          <InputLabel label={"Password"} />
          <TextInput path={""} />
          <InputError />
        </InputControl>
      </Form>
    </ComponentSection>
  );
};
