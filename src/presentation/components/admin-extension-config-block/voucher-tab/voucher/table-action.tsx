import React, { FC } from "react";
import { Button } from "../../../common/button";
import EyeIcon from "../../../icons/EyeIcon";
import { VoucherJsonPopup } from "./voucher-json-popup";

export const TableAction: FC<Props> = ({ voucher }) => {
  return (
    <VoucherJsonPopup>
      {({ open }) => (
        <Button
          text={
            <div className="text-xs font-medium text-blueB60">View json</div>
          }
          className="flex h-[36px] flex-none items-center justify-center rounded-[6px] border border-blueB60 px-[8px]"
          onClick={open}
        />
      )}
    </VoucherJsonPopup>
  );
};

type Props = {
  voucher: any;
};
