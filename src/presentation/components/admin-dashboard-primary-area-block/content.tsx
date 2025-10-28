import React, { useState } from "react";
import clsx from "clsx";
import { Dashboard } from "./dashboard";
import { VoucherTable } from "./voucher/voucher/table";
import { VoucherTab } from "./voucher/voucher-tab";

const Content = () => {
  const [currentTab, setCurrentTab] = useState<TDashboardTab>("main");

  return (
    <div className="h-[calc(100%+50px)] overflow-auto bg-white p-[12px]">
      <div className={clsx("block", { hidden: currentTab !== "main" })}>
        <Dashboard onViewAllVoucher={() => setCurrentTab("allVoucher")} />
      </div>
      <div className={clsx("block", { hidden: currentTab !== "allVoucher" })}>
        <VoucherTab onGoBack={() => setCurrentTab("main")} />
      </div>
    </div>
  );
};

export default Content;

type TDashboardTab = "main" | "allVoucher";
