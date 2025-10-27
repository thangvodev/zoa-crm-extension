import React from "react";
import { Tabs } from "../common/tabs";
import { TabsProps } from "antd";
import { MainFunctions } from "./main-functions";

export const ConfigTabs = () => {
  return <Tabs defaultActiveKey="1" className="min-h-0 flex-1" items={items} />;
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Tính năng chính",
    children: (
      <div className="h-full min-h-0 overflow-auto px-[12px] py-[12px]">
        <MainFunctions />
      </div>
    ),
  },
  {
    key: "2",
    label: "Hướng dẫn sử dụng",
    children: (
      <div className="h-full min-h-0 overflow-auto px-[12px] py-[12px]">
        Tab 2
      </div>
    ),
  },
  {
    key: "3",
    label: "Liên hệ hỗ trợ",
    children: (
      <div className="min-h-0 flex-1 overflow-auto px-[12px] py-[12px]">
        Tab 3
      </div>
    ),
  },
];
