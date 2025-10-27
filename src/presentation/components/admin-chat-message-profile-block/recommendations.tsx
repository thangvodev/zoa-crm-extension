import { Divider } from "antd";
import React, { FC } from "react";
import { Button } from "../common/button";
import VoucherImg from "../../static/images/voucher.png";
import { ButtonRender } from "./buttons";

const Recommendations = () => {
  return (
    <div className="flex flex-col gap-[9.8px]">
      {data.map((item, index) => (
        <RecommendationsItem key={index} onClick={() => {}} item={item} />
      ))}
    </div>
  );
};

const RecommendationsItem: FC<{ onClick: () => void; item: any }> = ({
  onClick,
  item,
}) => {
  function handleClick() {
    onClick();
  }

  return (
    <div className="overflow-hidden">
      <div
        className="flex h-[78.37px] items-center gap-[9px] rounded-[9.8px] border border-gray1 bg-white px-[9px] py-[9px]"
        style={{ boxShadow: "0px 3.27px 19.59px 0px #CDD6E61F" }}
        onClick={handleClick}
      >
        <div className="flex items-center gap-[10px]">
          <img
            src={VoucherImg}
            alt=""
            className="size-[58.78px] rounded-[8px] object-cover object-top"
          />
          <div className="flex flex-1 flex-col gap-[3px]">
            <div className="flex flex-col gap-[1px]">
              <div className="line-clamp-2 text-[11.43px] font-normal leading-none">
                Giảm 30% Phúc Long hoá đơn 50k
              </div>
              <div className="line-clamp-1 text-2xs font-normal text-[#959595]">
                Dành cho hoá đơn 50k
              </div>
            </div>
            <div className="line-clamp-1 text-[9px] font-normal text-[#707070]">
              HSD: 01/12/2025
            </div>
          </div>
        </div>
        <div className="relative h-full">
          <div className="absolute -top-[9px] left-0 size-[8.16px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9D9D9] bg-white" />
          <div className="absolute -bottom-[9px] left-0 size-[8.16px] -translate-x-1/2 translate-y-1/2 rounded-full border border-[#D9D9D9] bg-white" />
          <Divider dashed type="vertical" className="m-0 h-full" />
        </div>
        <ButtonRender status="notActive" />
      </div>
    </div>
  );
};

export { Recommendations };

const data = Array.from({ length: 20 });
