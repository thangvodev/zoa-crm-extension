import React, { FC } from "react";
import { Button } from "../../common/button";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";
import { Divider } from "antd";
import { VoucherTable } from "./voucher/table";

export const VoucherTab: FC<{ onGoBack: () => void }> = ({ onGoBack }) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex h-[40px] items-center gap-[4px]">
        <Button.Icon
          icon={<ArrowLeftIcon className="size-[18px] object-contain" />}
          className="flex size-[24px] items-center justify-center"
          onClick={onGoBack}
        />
        <div className="text-[19px] font-medium">Danh sách gửi voucher</div>
      </div>
      <Divider className="m-0" />
      <VoucherTable />
    </div>
  );
};
