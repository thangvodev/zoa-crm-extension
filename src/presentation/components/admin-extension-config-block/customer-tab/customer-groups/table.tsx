import React from "react";
import { TableColumnsType } from "antd";
import { usePagination } from "../../../../hooks/usePagination";
import { TableAction } from "./table-action";
import dayjs from "dayjs";
import Table from "../../../common/table";
import { TablePagination } from "./table-pagination";
import { Button } from "../../../common/button";
import AddCircleIcon from "../../../icons/AddCircleIcon";
import { CreateGroupPopup } from "./create-group-popup";

export const CustomerGroupTable = () => {
  const { currentPage, currentPageSize, setPageSize, goToPage } =
    usePagination();

  return (
    <div className="flex h-full flex-col gap-[16px]">
      <div className="flex h-[40px] items-center justify-between">
        <div className="text-[19px] font-medium">Danh sách nhóm khách hàng</div>
        <CreateGroupPopup>
          {({ open }) => (
            <Button
              text={
                <div className="flex items-center gap-[10px]">
                  <div className="text-sm font-medium text-blueB60">
                    Tạo danh sách
                  </div>
                  <AddCircleIcon className="size-[16.67px] text-blueB60" />
                </div>
              }
              className="h-full flex-none rounded-[4px] border border-blueB60 px-[16px]"
              onClick={open}
            />
          )}
        </CreateGroupPopup>
      </div>
      <div className="flex h-full flex-col gap-[12px]">
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
          scroll={{ x: "max-content", y: 430 + 44 + 12 }}
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
    title: "Tên danh sách",
    dataIndex: ["item", "name"],
    fixed: "left",
    render: (value) => (
      <div className="text-sm font-normal text-gray8">{value}</div>
    ),
  },
  {
    title: "Member",
    dataIndex: ["item", "totalMember"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">{value}</div>
    ),
  },
  {
    title: "Created",
    dataIndex: ["item", "createdAt"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">
        {dayjs(value, "HH:mm:ss[, ]DD/MM/YYYY").format(
          "HH:mm:ss[, ]DD/MM/YYYY",
        )}
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
      name: "Khách hàng mới",
      totalMember: 123,
      createdAt: "12:00:12, 12/04/2025",
    },
  })),
  total: 100,
};
