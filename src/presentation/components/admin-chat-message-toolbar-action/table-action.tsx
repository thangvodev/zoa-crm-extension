import React, { FC } from "react";
import { Button } from "../common/button";
import EyeIcon from "../icons/EyeIcon";
import { VoucherInformationPopup } from "./voucher-information-popup";

export const TableAction: FC<Props> = ({ voucher }) => {
  return (
    <div className="flex items-center justify-center gap-[20px]">
      <VoucherInformationPopup>
        {({ open }) => (
          <Button.Icon
            icon={<EyeIcon className="size-[22px] text-blueB60" />}
            onClick={open}
          />
        )}
      </VoucherInformationPopup>
      <Button
        text={<div className="text-xs font-medium text-blueB60">Gửi đi</div>}
        className="flex h-[36px] flex-none items-center justify-center rounded-[6px] border border-blueB60 px-[8px]"
      />
    </div>
  );
};

type Props = {
  voucher: any;
};
