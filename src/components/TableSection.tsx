import { TableSectionProps } from "@types";
import { Component } from "solid-js";
import { lazily } from "solidjs-lazily";

const { ComponentSection } = lazily(() => import("./ComponentSection"));
const { ComponentSectionDescription } = lazily(
  () => import("./ComponentSectionDescription"),
);
const { ComponentSectionHeader } = lazily(
  () => import("./ComponentSectionHeader"),
);
const { Text } = lazily(() => import("./Text"));
const { FileInput } = lazily(() => import("./FileInput"));
export const TableSection: Component<TableSectionProps> = (props) => {
  return (
    <ComponentSection {...props}>
      <ComponentSectionHeader>
        <Text>Tables</Text>
      </ComponentSectionHeader>
      <ComponentSectionDescription>
        <Text>Tables with sortable headers</Text>
      </ComponentSectionDescription>
      <FileInput accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
    </ComponentSection>
  );
};
