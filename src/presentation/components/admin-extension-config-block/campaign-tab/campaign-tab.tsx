import React from "react";
import { CampaignTable } from "./campaign/table";

export const CampaignTab = () => {
  return (
    <div className="flex h-full flex-col gap-[8px]">
      <CampaignTable />
    </div>
  );
};
