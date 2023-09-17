import { TableSectionProps } from "@types";
import { fileInputDelegator } from "@util";
import { chunk } from "lodash-es";
import { Component, For, createSignal } from "solid-js";
import { lazily } from "solidjs-lazily";
import { Table } from "./Table";
import { TableData } from "./TableData";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

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
        <TableRow>
          <For each={headers()}>
            {(header) => {
              return <TableHeader>{header}</TableHeader>;
            }}
          </For>
        </TableRow>
        <For each={chunks()[page()]}>
          {(chunkData, chunkDataIndex) => {
            console.log("Chunk Data", chunkData);
            return (
              <TableRow>
                <For each={Object.entries(chunkData)}>
                  {([k, v]) => {
                    return <TableData>{v}</TableData>;
                  }}
                </For>
              </TableRow>
            );
          }}
        </For>
      </Table>
    </ComponentSection>
  );
};
