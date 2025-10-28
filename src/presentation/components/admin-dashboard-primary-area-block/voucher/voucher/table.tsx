import React from "react";
import { TableFilter } from "./table-filter";
import { TableColumnsType } from "antd";
import { Form } from "../../../common/form";
import { usePagination } from "../../../../hooks/usePagination";
import { voucherStatusConfigGenerator } from "../../../../utils/generators/voucherStatusConfig";
import dayjs from "dayjs";
import Table from "../../../common/table";
import { TablePagination } from "./table-pagination";
import { formatCurrency } from "../../../../utils/helpers";
import VoucherImg from "../../../../static/images/voucher.png";

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
    title: "ID",
    dataIndex: ["item", "id"],
    fixed: "left",
    render: (value) => (
      <div className="text-sm font-normal text-gray8">{value}</div>
    ),
  },
  {
    title: "Tên khách hàng",
    dataIndex: ["item", "customer"],
    render: (_, { item }) => {
      return (
        <div className="flex items-center gap-[12px]">
          <img
            src={item.customer.profileImg}
            alt=""
            className="size-[32px] rounded-[3.56px]"
          />
          <div className="text-sm font-normal text-gray8">
            {item.customer.name}
          </div>
        </div>
      );
    },
  },
  {
    title: "Mã voucher",
    dataIndex: ["item", "code"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">{value}</div>
    ),
  },
  {
    title: "Tên batch",
    dataIndex: ["item", "batchName"],
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
    title: "collected",
    dataIndex: ["item", "collectedAt"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "HH:mm:ss[, ]DD/MM/YYYY").format(
          "HH:mm:ss[, ]DD/MM/YYYY",
        )}
      </div>
    ),
  },
  {
    title: "issued",
    dataIndex: ["item", "issuedAt"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "HH:mm:ss[, ]DD/MM/YYYY").format(
          "HH:mm:ss[, ]DD/MM/YYYY",
        )}
      </div>
    ),
  },
  {
    title: "expired",
    dataIndex: ["item", "expiredAt"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "HH:mm:ss[, ]DD/MM/YYYY").format(
          "HH:mm:ss[, ]DD/MM/YYYY",
        )}
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
];

const data = {
  vouchers: Array.from({ length: 100 }).map((_, index) => ({
    item: {
      id: index,
      customer: {
        profileImg: VoucherImg,
        name: "Phạm Thu Hồng",
      },
      code: "123QER",
      batchName: "Giảm 50k Phúc long",
      value: "120000",
      status: `${(index % 3) + 1}`,
      collectedAt: "12:00:14, 12/05/2026",
      issuedAt: "12:00:14, 12/05/2026",
      expiredAt: "12:00:14, 12/05/2026",
    },
  })),
  total: 100,
};
