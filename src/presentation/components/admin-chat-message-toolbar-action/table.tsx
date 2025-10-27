import React, { useState } from "react";
import { TableFilter } from "./table-filter";
import { TableColumnsType } from "antd";
import { Form } from "../common/form";
import { usePagination } from "../../hooks/usePagination";
import { voucherStatusGenerator } from "../../utils/generators/voucherStatus";
import { TableAction } from "./table-action";
import VoucherImg from "../../static/images/voucher.png";
import dayjs from "dayjs";
import Table from "../common/table";
import { TablePagination } from "./table-pagination";

export const VoucherTable = () => {
  const [tableForm] = Form.useForm();
  const { currentPage, currentPageSize, setPageSize, goToPage } = usePagination(
    { initialPageSize: 10 },
  );
  const [searchString, setSearchString] = useState<string>();
  const [customerGroup, setCustomerGroup] = useState<string>();

  const initialValuesFilter = {
    searchString: "",
    customerGroup: null,
  };

  const handleSearchSubmit = ({
    searchString,
    customerGroup,
  }: typeof initialValuesFilter) => {
    goToPage(1);
    setSearchString(searchString);
    setCustomerGroup(customerGroup ?? "all");
  };

  return (
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
        scroll={{ x: "max-content", y: "500px" }}
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
  );
};

const tableColumns: TableColumnsType = [
  {
    title: "ID",
    dataIndex: ["item", "id"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">{value}</div>
    ),
  },
  {
    title: "Tên batch voucher",
    dataIndex: ["item", "title"],
    render: (_, { item }) => {
      return (
        <div className="flex items-center gap-[4px]">
          <img
            src={item.thumbImg}
            alt=""
            className="size-[32px] rounded-[3.56px]"
          />
          <div className="text-sm font-normal text-gray8">{item.title}</div>
        </div>
      );
    },
  },
  {
    title: "Hạn sử dụng",
    dataIndex: ["item", "expiryDate"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "DD/MM/YYYY").format("DD/MM/YYYY")}
      </div>
    ),
  },
  {
    title: "Trạng thái",
    dataIndex: ["item", "status"],
    render: (value) => {
      return (
        <div>
          {voucherStatusGenerator({
            statusId: value,
          })}
        </div>
      );
    },
  },
  {
    title: "",
    key: "actions",
    render: (record) => <TableAction voucher={record} />,
  },
];

const data = {
  vouchers: Array.from({ length: 100 }).map((_, index) => ({
    item: {
      id: index,
      thumbImg: VoucherImg,
      title: "Giảm 30k Phúc Long",
      expiryDate: "12/05/2026",
      status: `${index % 2}`,
    },
  })),
  total: 100,
};
