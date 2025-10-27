import React, { useState } from "react";
import { TableFilter } from "./table-filter";
import { TableColumnsType } from "antd";
import { Form } from "../../../common/form";
import { usePagination } from "../../../../hooks/usePagination";
import { voucherStatusConfigGenerator } from "../../../../utils/generators/voucherStatusConfig";
import { TableAction } from "./table-action";
import dayjs from "dayjs";
import Table from "../../../common/table";
import { TablePagination } from "./table-pagination";
import { formatCurrency } from "../../../../utils/helpers";

export const VoucherTable = () => {
  const [tableForm] = Form.useForm();
  const { currentPage, currentPageSize, setPageSize, goToPage } =
    usePagination();

  const initialValuesFilter = {
    searchString: "",
    filterOptions: null,
  };

  const handleSearchSubmit = (values: typeof initialValuesFilter) => {
    console.log(values);
    goToPage(1);
  };

  return (
    <div className="flex h-full flex-col gap-[16px]">
      <div className="flex h-[40px] items-center justify-between">
        <div className="text-[19px] font-medium">Danh sách voucher</div>
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
    title: "Mã voucher",
    dataIndex: ["item", "code"],
    fixed: "left",
    render: (value) => (
      <div className="text-sm font-normal text-gray8">{value}</div>
    ),
  },
  {
    title: "Tên batch",
    dataIndex: ["item", "title"],
    fixed: "left",
    render: (value) => (
      <div className="text-sm font-normal text-gray8">{value}</div>
    ),
  },
  {
    title: "Value",
    dataIndex: ["item", "value"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {formatCurrency(value)}
      </div>
    ),
  },
  {
    title: "Status",
    dataIndex: ["item", "status"],
    render: (value) => {
      return voucherStatusConfigGenerator({
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
    title: "issued at",
    dataIndex: ["item", "issuedAt"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "DD/MM/YYYY").format("DD/MM/YYYY")}
      </div>
    ),
  },
  {
    title: "collected at",
    dataIndex: ["item", "collectedAt"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "DD/MM/YYYY").format("DD/MM/YYYY")}
      </div>
    ),
  },
  {
    title: "activated at",
    dataIndex: ["item", "activatedAt"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "DD/MM/YYYY").format("DD/MM/YYYY")}
      </div>
    ),
  },
  {
    title: "redeemed at",
    dataIndex: ["item", "redeemedAt"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "DD/MM/YYYY").format("DD/MM/YYYY")}
      </div>
    ),
  },
  {
    title: "disabled at",
    dataIndex: ["item", "disabledAt"],
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
    width: "8%",
    render: (_, { item }) => <TableAction voucher={item} />,
  },
];

const data = {
  vouchers: Array.from({ length: 100 }).map((_, index) => ({
    item: {
      id: index,
      code: "123QER",
      title: "Giảm 50k Phúc long",
      value: "120000",
      status: `${index % 5}`,
      from: "12/05/2026",
      to: "12/05/2026",
      issuedAt: "12/05/2026",
      collectedAt: "12/05/2026",
      activatedAt: "12/05/2026",
      redeemedAt: "12/05/2026",
      disabledAt: "12/05/2026",
    },
  })),
  total: 100,
};
