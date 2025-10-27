import React from "react";
import { Tabs } from "../common/tabs";
import { TabsProps } from "antd";
import { VoucherList } from "./voucher-list";

export const VoucherTabs = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      className="custom-tabs min-h-0 flex-1"
      items={items}
    />
  );
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Ưu đãi",
    children: (
      <div className="h-full min-h-0 overflow-auto bg-[#F4F8FF] px-[12px] py-[12px]">
        <VoucherList />
      </div>
    ),
  },
  {
    key: "2",
    label: "Thu thập",
    children: (
      <div className="h-full min-h-0 overflow-auto bg-[#F4F8FF] px-[12px] py-[12px]">
        <VoucherList />
      </div>
    ),
  },
  {
    key: "3",
    label: "Đã dùng",
    children: (
      <div className="h-full min-h-0 overflow-auto bg-[#F4F8FF] px-[12px] py-[12px]">
        <VoucherList />
      </div>
    ),
  },
];
