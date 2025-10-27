import React from "react";
import { Tabs } from "../common/tabs";
import { TabsProps } from "antd";
import { VoucherTab } from "./voucher-tab/voucher-tab";
import { CampaignTab } from "./campaign-tab/campaign-tab";
import { CustomerTab } from "./customer-tab/customer-tab";
import { LibraryTab } from "./library-tab/library-tab";
import { IntegrationForm } from "./integration-tab/integration-form";

export const ConfigTabs = () => {
  return <Tabs defaultActiveKey="1" className="min-h-0 flex-1" items={items} />;
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Voucher",
    children: (
      <div className="h-full min-h-0 overflow-auto pt-[10px]">
        <VoucherTab />
      </div>
    ),
  },
  {
    key: "2",
    label: "Chiến dịch",
    children: (
      <div className="h-full min-h-0 overflow-auto pt-[10px]">
        <CampaignTab />
      </div>
    ),
  },
  {
    key: "3",
    label: "Khách hàng",
    children: (
      <div className="h-full min-h-0 overflow-auto pt-[10px]">
        <CustomerTab />
      </div>
    ),
  },
  {
    key: "4",
    label: "Thư viện",
    children: (
      <div className="h-full min-h-0 overflow-auto pt-[10px]">
        <LibraryTab />
      </div>
    ),
  },
  {
    key: "5",
    label: "Tích hợp",
    children: (
      <div className="h-full min-h-0 overflow-auto pt-[10px]">
        <IntegrationForm />
      </div>
    ),
  },
];
