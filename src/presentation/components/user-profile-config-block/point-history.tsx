import React from "react";
import { SearchBarNoPopup } from "../common/search-bar";
import { Divider } from "antd";
import BlueBag from "../../static/icons/blue-bag.png";
import CoinGold from "../../static/icons/coin-gold.png";
import SearchIcon from "../icons/SearchIcon";

export const PointHistory = () => {
  return (
    <div className="flex flex-col gap-[12px] rounded-[12px] border border-gray1 bg-white px-[20px] pb-[16px] pt-[12px]">
      <div className="text-base font-normal">Lịch sử tích điểm</div>
      <SearchBarNoPopup
        placeholder="Tìm kiếm"
        prefix={<SearchIcon className="mx-[6px]" />}
        suffix={null}
        className="h-[48px] rounded-[8px]"
      />
      <div className="flex flex-col gap-[12px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-between">
              <div className="flex gap-[12px]">
                <div className="flex size-[40px] items-center justify-center self-center rounded-full bg-blue1">
                  <img
                    src={BlueBag}
                    alt=""
                    className="size-[20px] object-contain"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="text-sm font-normal">
                    Cộng điểm thành công
                  </div>
                  <div className="text-xs font-normal text-gray7">
                    Mua đơn hàng #123435
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex items-center justify-center gap-[4px] rounded-[24px] bg-blue1 px-[6px] py-[4px]">
                  <div className="text-blueB60">+200</div>
                  <img src={CoinGold} alt="" className="size-[14px]" />
                </div>
                <div className="text-2xs font-normal text-gray6">
                  09:20, 27/07
                </div>
              </div>
            </div>
            {index < 9 ? <Divider className="m-0 border-gray1" /> : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
