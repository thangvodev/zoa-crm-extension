import React from "react";
import { Tabs } from "../common/tabs";
import { TabsProps } from "antd";
import { Recommendations } from "./recommendations";

export const ChatTabs = () => {
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
    label: "Đề xuất",
    children: (
      <div className="h-full min-h-0 overflow-auto pt-[13px]">
        <Recommendations />
      </div>
    ),
  },
  {
    key: "2",
    label: "Lịch sử",
    children: (
      <div className="h-full min-h-0 overflow-auto pt-[13px]">
        <Recommendations />
      </div>
    ),
  },
];
