import { TableSectionProps } from "@types";
import { fileInputDelegator } from "@util";
import { chunk } from "lodash-es";
import { Component, For, createSignal } from "solid-js";
import { lazily } from "solidjs-lazily";

const { ComponentSection } = lazily(() => import("./ComponentSection"));
const { ComponentSectionDescription } = lazily(
  () => import("./ComponentSectionDescription"),
);
const { ComponentSectionHeader } = lazily(
  () => import("./ComponentSectionHeader"),
);
const { FileInput } = lazily(() => import("./FileInput"));

const { Table } = lazily(() => import("./Table"));
const { TableHeader } = lazily(() => import("./TableHeader"));
const { TableHeaderRow } = lazily(() => import("./TableHeaderRow"));
const { TableData } = lazily(() => import("./TableData"));
const { TableDataRow } = lazily(() => import("./TableDataRow"));

const { Text } = lazily(() => import("./Text"));

export const TableSection: Component<TableSectionProps> = (props) => {
  const [headers, setHeaders] = createSignal<string[]>([]);
  const [data, setData] = createSignal<{ [key: string]: string }[]>([]);
  const [chunks, setChunks] = createSignal<{ [key: string]: string }[][]>([]);
  const [page, setPage] = createSignal(0);

  return (
    <ComponentSection {...props}>
      <ComponentSectionHeader>
        <Text>Auto Tables</Text>
      </ComponentSectionHeader>
      <ComponentSectionDescription>
        <Text>Generate a table via csv data with relevant headers</Text>
      </ComponentSectionDescription>
      <FileInput
        onFileChange={fileInputDelegator({
          "text/csv": (results, file) => {
            const headers = results.meta.fields;
            if (headers) setHeaders(headers);
            const csvData = results.data;
            setData(csvData);
            const chunks = chunk(data(), 10);
            setChunks(chunks);
          },
        })}
      />
      <Table>
        <TableHeaderRow>
          <For each={headers()}>
            {(header) => {
              return <TableHeader>{header}</TableHeader>;
            }}
          </For>
        </TableHeaderRow>
        <For each={chunks()[page()]}>
          {(chunkData) => {
            return (
              <TableDataRow>
                <For each={Object.entries(chunkData)}>
                  {([k, v]) => {
                    return <TableData>{v}</TableData>;
                  }}
                </For>
              </TableDataRow>
            );
          }}
        </For>
      </Table>
    </ComponentSection>
  );
};
