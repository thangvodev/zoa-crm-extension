import React, { FC } from "react";
import { Button } from "../common/button";

export const ButtonRender: FC<{ status: TStatus }> = ({ status }) => {
  switch (status) {
    case "notActive":
      return (
        <Button
          text={
            <div className="text-[9px] font-normal text-white">Gửi ngay</div>
          }
          className="flex h-[28px] w-[46px] flex-none items-center justify-center rounded-[4.9px] bg-blueB60 px-[4.9px]"
        />
      );
    case "activated":
      return (
        <Button
          text={
            <div className="text-[9px] font-normal leading-3 text-gray6">
              Đã kích hoạt
            </div>
          }
          className="flex h-[28px] w-[46px] flex-none items-center justify-center rounded-[4.9px] bg-gray1 px-[4.9px]"
          disabled
        />
      );
    case "collected":
      return (
        <Button
          text={
            <div className="text-[9px] font-normal leading-3 text-blue5">
              Đã thu thập
            </div>
          }
          className="flex h-[28px] w-[46px] flex-none items-center justify-center rounded-[4.9px] bg-blue1 px-[4.9px]"
          disabled
        />
      );
    case "expired":
      return (
        <Button
          text={
            <div className="text-[9px] font-normal leading-3 text-red6">
              Hết hạn
            </div>
          }
          className="flex h-[28px] w-[46px] flex-none items-center justify-center rounded-[4.9px] bg-red1 px-[4.9px]"
          disabled
        />
      );

    default:
      return (
        <Button
          text={<div className="text-2xs font-normal text-white">Gửi ngay</div>}
          className="flex h-[29.39px] flex-none items-center justify-center rounded-[4.9px] bg-blueB60 px-[4.9px]"
        />
      );
  }
};

type TStatus = "notActive" | "activated" | "collected" | "expired";
