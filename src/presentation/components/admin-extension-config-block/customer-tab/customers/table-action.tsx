import React, { FC } from "react";
import { Button } from "../../../common/button";
import EyeIcon from "../../../icons/EyeIcon";
import { CustomerDetailsPopup } from "./customer-details-popup";

export const TableAction: FC<Props> = ({ voucher }) => {
  return (
    <CustomerDetailsPopup>
      {({ open }) => (
        <Button
          text={
            <div className="text-xs font-medium text-blueB60">View detail</div>
          }
          className="flex h-[36px] flex-none items-center justify-center rounded-[6px] border border-blueB60 px-[8px]"
          onClick={open}
        />
      )}
    </CustomerDetailsPopup>
  );
};

type Props = {
  voucher: any;
};
