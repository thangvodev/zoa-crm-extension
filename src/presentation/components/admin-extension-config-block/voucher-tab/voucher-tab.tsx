import React, { FC, useState } from "react";
import { Button } from "../../common/button";
import { VoucherTable } from "./voucher/table";
import clsx from "clsx";
import { BatchVoucherTable } from "./batch-voucher/table";

export const VoucherTab = () => {
  const [currentTab, setCurrentTab] =
    useState<keyof typeof VoucherTabs>("voucher");

  return (
    <div className="flex h-full flex-col gap-[8px]">
      <div className="flex items-center gap-[16px]">
        <TabButton
          tab="voucher"
          currentTab={currentTab}
          onClick={() => setCurrentTab("voucher")}
        />
        <TabButton
          tab="batchVoucher"
          currentTab={currentTab}
          onClick={() => setCurrentTab("batchVoucher")}
        />
      </div>
      <div className={clsx("block", { hidden: currentTab !== "voucher" })}>
        <VoucherTable />
      </div>
      <div className={clsx("block", { hidden: currentTab !== "batchVoucher" })}>
        <BatchVoucherTable />
      </div>
    </div>
  );
};

const TabButton: FC<{
  tab: keyof typeof VoucherTabs;
  currentTab: keyof typeof VoucherTabs;
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
          {VoucherTabs[tab].label}
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

const VoucherTabs = {
  voucher: {
    label: "Voucher",
  },
  batchVoucher: {
    label: "Batch voucher",
  },
};
