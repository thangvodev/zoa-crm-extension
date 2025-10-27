import React, { useState } from "react";
import { TableFilter } from "./table-filter";
import { TableColumnsType } from "antd";
import { Form } from "../../../common/form";
import { usePagination } from "../../../../hooks/usePagination";
import { TableAction } from "./table-action";
import dayjs from "dayjs";
import Table from "../../../common/table";
import { TablePagination } from "./table-pagination";
import { batchVoucherStatusConfigGenerator } from "../../../../utils/generators/batchVoucherStatusConfig";
import { Button } from "../../../common/button";
import AddCircleIcon from "../../../icons/AddCircleIcon";
import { CreateBatchPopup } from "./create-batch-popup";

export const BatchVoucherTable = () => {
  const [tableForm] = Form.useForm();
  const { currentPage, currentPageSize, setPageSize, goToPage } =
    usePagination();
  const [searchString, setSearchString] = useState<string>();
  const [filterOptions, setFilterOptions] = useState<any>();

  const initialValuesFilter = {
    searchString: "",
    filterOptions: null,
  };

  const handleSearchSubmit = ({
    searchString,
    filterOptions,
  }: typeof initialValuesFilter) => {
    goToPage(1);
    setSearchString(searchString);
    setFilterOptions(filterOptions ?? {});
  };

  return (
    <div className="flex h-full flex-col gap-[16px]">
      <div className="flex h-[40px] items-center justify-between">
        <div className="text-[19px] font-medium">Danh sách batch voucher</div>
        <CreateBatchPopup>
          {({ open }) => (
            <Button
              text={
                <div className="flex items-center gap-[10px]">
                  <div className="text-sm font-medium text-blueB60">
                    Tạo batch
                  </div>
                  <AddCircleIcon className="size-[16.67px] text-blueB60" />
                </div>
              }
              className="h-full flex-none rounded-[4px] border border-blueB60 px-[16px]"
              onClick={open}
            />
          )}
        </CreateBatchPopup>
      </div>
      <div className="flex h-full flex-col gap-[12px]">
        <TableFilter form={tableForm} onFormFinish={handleSearchSubmit} />
        <Table
          fontSize={12}
          columns={tableColumns}
          dataSource={data.vouchers}
          rowKey={(record) => record.item.id}
          loading={false}
          pagination={{
            position: ["none", "none"],
            total: data.total,
            pageSize: currentPageSize,
            current: currentPage,
          }}
          scroll={{ x: "max-content", y: 430 }}
          customPaginationRender={
            <TablePagination
              showSizeChanger={false}
              total={data.total}
              pageSize={currentPageSize}
              current={currentPage}
              onChange={(pageIndex) => {
                goToPage(pageIndex);
              }}
              onSizeChange={(pageSize) => {
                setPageSize(pageSize);
              }}
            />
          }
        />
      </div>
    </div>
  );
};

const tableColumns: TableColumnsType = [
  {
    title: "Batch name",
    dataIndex: ["item", "title"],
    fixed: "left",
    render: (value) => (
      <div className="text-sm font-normal text-gray8">{value}</div>
    ),
  },
  {
    title: "Status",
    dataIndex: ["item", "status"],
    render: (value) => {
      return batchVoucherStatusConfigGenerator({
        statusId: value,
      });
    },
  },
  {
    title: "From",
    dataIndex: ["item", "from"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "DD/MM/YYYY").format("DD/MM/YYYY")}
      </div>
    ),
  },
  {
    title: "To",
    dataIndex: ["item", "to"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "DD/MM/YYYY").format("DD/MM/YYYY")}
      </div>
    ),
  },
  {
    title: "#imported",
    dataIndex: ["item", "importedAt"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "DD/MM/YYYY").format("DD/MM/YYYY")}
      </div>
    ),
  },
  {
    title: "#collected",
    dataIndex: ["item", "collectedAt"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "DD/MM/YYYY").format("DD/MM/YYYY")}
      </div>
    ),
  },
  {
    title: "#activated",
    dataIndex: ["item", "activatedAt"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "DD/MM/YYYY").format("DD/MM/YYYY")}
      </div>
    ),
  },
  {
    title: "#redeemed",
    dataIndex: ["item", "redeemedAt"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "DD/MM/YYYY").format("DD/MM/YYYY")}
      </div>
    ),
  },
  {
    title: "#expired",
    dataIndex: ["item", "expiredAt"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "DD/MM/YYYY").format("DD/MM/YYYY")}
      </div>
    ),
  },
  {
    title: "#disabled",
    dataIndex: ["item", "disabledAt"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "DD/MM/YYYY").format("DD/MM/YYYY")}
      </div>
    ),
  },
  {
    title: "#remained",
    dataIndex: ["item", "remainedAt"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "DD/MM/YYYY").format("DD/MM/YYYY")}
      </div>
    ),
  },
  {
    title: "",
    key: "actions",
    fixed: "right",
    width: "5%",
    render: (_, { item }) => <TableAction voucher={item} />,
  },
];

const data = {
  vouchers: Array.from({ length: 100 }).map((_, index) => ({
    item: {
      id: index,
      title: "Giảm 50k Phúc long",
      status: `${index % 4}`,
      from: "12/05/2026",
      to: "12/05/2026",
      importedAt: "12/05/2026",
      collectedAt: "12/05/2026",
      activatedAt: "12/05/2026",
      redeemedAt: "12/05/2026",
      expiredAt: "12/05/2026",
      disabledAt: "12/05/2026",
      remainedAt: "12/05/2026",
    },
  })),
  total: 100,
};
