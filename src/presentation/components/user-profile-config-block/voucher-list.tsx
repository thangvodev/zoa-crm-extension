import React, { FC } from "react";
import VoucherImg from "../../static/images/voucher.png";
import { VoucherInformationSheet } from "./voucher-information-sheet";
import { Divider } from "antd";
import { Button } from "../common/button";
import { formatCurrency } from "../../utils/helpers";

const VoucherList = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      {data.map((item, index) => (
        <VoucherInformationSheet key={index}>
          {({ open }) => <VoucherItem onClick={open} item={item} />}
        </VoucherInformationSheet>
      ))}
    </div>
  );
};

const VoucherItem: FC<{ onClick: () => void; item: any }> = ({
  onClick,
  item,
}) => {
  function handleClick() {
    onClick();
  }

  return (
    <div
      className="flex h-[96px] items-center gap-[10px] rounded-[12px] bg-white px-[10px] py-[8px]"
      onClick={handleClick}
    >
      <img
        src={VoucherImg}
        alt=""
        className="size-[73px] rounded-[8px] object-cover object-top"
      />
      <div className="flex flex-1 flex-col gap-[4px]">
        <div className="flex flex-col gap-[2px]">
          <div className="text-sm font-normal">
            Giảm 30% Phúc Long hoá đơn 50k
          </div>
          <div className="text-xs font-normal text-[#959595]">
            Dành cho hoá đơn 50k
          </div>
        </div>
        <div className="text-[11px] font-normal text-[#707070]">
          HSD: 01/12/2025
        </div>
      </div>
      <div className="relative h-full">
        <div className="absolute -top-[8px] left-0 size-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5F9FB]" />
        <div className="absolute -bottom-[8px] left-0 size-[14px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#F5F9FB]" />
        <Divider dashed type="vertical" className="m-0 h-full" />
      </div>
      <Button
        text={<div className="text-blueB60 text-xs font-medium">Thu thập</div>}
        className="border-blueB60 flex h-[36px] flex-none items-center justify-center rounded-[6px] border bg-white px-[8px]"
      />
    </div>
  );
};

export { VoucherList };

const data = Array.from({ length: 20 });
