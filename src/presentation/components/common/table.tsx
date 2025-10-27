import { ConfigProvider, Table as OriginalTable, TableProps } from "antd";

function Table<T extends object>({
  fontSize,
  customPaginationRender,
  ...rest
}: CustomTableProps<T>) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            cellFontSize: fontSize ?? 17,
            headerBg: "#F5F9FC",
            headerSplitColor: "#F5F9FC",
            headerColor: "#36383A",
            headerSortActiveBg: "#52d9d7",
            headerSortHoverBg: "#52d9d7",
          },
        },
      }}
    >
      <div className="flex flex-col">
        <OriginalTable<T> {...rest} />
        {customPaginationRender}
      </div>
    </ConfigProvider>
  );
}

export default Table;

type CustomTableProps<T> = TableProps<T> & {
  fontSize?: number;
  customPaginationRender?: React.ReactNode;
};
