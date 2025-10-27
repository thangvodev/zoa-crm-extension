import React, { useState } from "react";
import { TableFilter } from "./table-filter";
import { TableColumnsType } from "antd";
import { Form } from "../../../../common/form";
import { usePagination } from "../../../../../hooks/usePagination";
import dayjs from "dayjs";
import Table from "../../../../common/table";
import { TablePagination } from "../../../voucher-tab/voucher/table-pagination";
import VoucherImg from "../../../../../static/images/voucher.png";

export const RedemptionHistoryTable = () => {
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
    title: "Campaign name",
    dataIndex: ["item", "title"],
    fixed: "left",
    render: (_, { item }) => {
      return (
        <div className="flex items-center gap-[12px]">
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
    title: "Voucher code",
    dataIndex: ["item", "voucherCode"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">{value}</div>
    ),
  },
  {
    title: "Activated at",
    dataIndex: ["item", "activatedAt"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "HH:mm[, ]DD/MM/YYYY").format("HH:mm[, ]DD/MM/YYYY")}
      </div>
    ),
  },
];

const data = {
  vouchers: Array.from({ length: 100 }).map((_, index) => ({
    item: {
      id: index,
      voucherCode: "123QER",
      thumbImg: VoucherImg,
      title: "Giảm 50k Phúc long",
      activatedAt: "12:16, 24/12/2025",
    },
  })),
  total: 100,
};
