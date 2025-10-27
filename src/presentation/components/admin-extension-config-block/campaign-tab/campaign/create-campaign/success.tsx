import React from "react";
import SuccessImg from "../../../../../static/images/campaign-success.png";

export const Success = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-[20px]">
      <img src={SuccessImg} alt="" className="size-[80px] object-contain" />
      <div className="flex flex-col items-center gap-[12px]">
        <div className="text-xl font-normal text-gray8">
          Đã lên lịch gửi campaign
        </div>
        <div className="text-2xl font-medium">
          5:54, 20/10/2025 - 12:16, 24/12/202
        </div>
      </div>
    </div>
  );
};
