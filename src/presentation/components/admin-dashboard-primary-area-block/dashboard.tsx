import React, { FC } from "react";
import { NewVoucherTable } from "./voucher/new-voucher/table";
import { Charts } from "./charts/charts";

export const Dashboard: FC<{ onViewAllVoucher: () => void }> = ({
  onViewAllVoucher,
}) => {
  return (
    <div className="flex flex-col gap-[19px]">
      <Charts />
      <NewVoucherTable onClick={onViewAllVoucher} />
    </div>
  );
};
