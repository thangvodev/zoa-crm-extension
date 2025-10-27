import React from "react";
import { VoucherTable } from "./table";

const Content = () => {
  return (
    <div className="flex h-[100vh] flex-col gap-[16px] overflow-auto bg-white px-[20px] pt-[12px]">
      <div className="text-lg font-medium">Danh sách voucher</div>
      <VoucherTable />
    </div>
  );
};

export default Content;
