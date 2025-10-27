import React from "react";
import { RedemptionHistoryTable } from "./table";

export const RedemptionHistory = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="text-base font-medium">Redemption history</div>
      <RedemptionHistoryTable />
    </div>
  );
};
