import React, { FC, useState } from "react";
import { Button } from "../../common/button";
import clsx from "clsx";
import { CustomerGroupTable } from "./customer-groups/table";
import { CustomerTable } from "./customers/table";

export const CustomerTab = () => {
  const [currentTab, setCurrentTab] =
    useState<keyof typeof CustomerTabs>("customers");

  return (
    <div className="flex h-full flex-col gap-[8px]">
      <div className="flex items-center gap-[16px]">
        <TabButton
          tab="customers"
          currentTab={currentTab}
          onClick={() => setCurrentTab("customers")}
        />
        <TabButton
          tab="groups"
          currentTab={currentTab}
          onClick={() => setCurrentTab("groups")}
        />
      </div>
      <div className={clsx("block", { hidden: currentTab !== "customers" })}>
        <CustomerTable />
      </div>
      <div className={clsx("block", { hidden: currentTab !== "groups" })}>
        <CustomerGroupTable />
      </div>
    </div>
  );
};

const TabButton: FC<{
  tab: keyof typeof CustomerTabs;
  currentTab: keyof typeof CustomerTabs;
  onClick: () => void;
}> = ({ tab, currentTab, onClick }) => {
  return (
    <Button
      text={
        <div
          className={clsx("text-sm font-medium text-gray6", {
            "!text-blueB60": currentTab === tab,
          })}
        >
          {CustomerTabs[tab].label}
        </div>
      }
      className={clsx(
        "flex h-[40px] flex-none items-center justify-center rounded-[4px] border border-transparent bg-gray2 px-[16px]",
        { "!border-blueB60 !bg-blue1": currentTab === tab },
      )}
      onClick={onClick}
    />
  );
};

const CustomerTabs = {
  customers: {
    label: "Khách hàng",
  },
  groups: {
    label: "Danh sách nhóm",
  },
};
