import React, { FC } from "react";
import GoldBg from "../../static/images/gold-bg.jpg";
import SilverBg from "../../static/images/silver-bg.jpg";
import DiamondBg from "../../static/images/diamond-bg.jpg";
import BarCode from "../../static/images/bar-code.png";
import { Divider, Progress } from "antd";

const CardMember: FC<{ onViewInfo?: any }> = ({ onViewInfo }) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px]"
      style={{ boxShadow: "0px 1px 4px 0px #D1DDE3A6" }}
    >
      {/* Body */}
      <div className="relative flex flex-col gap-[8px] bg-white pb-[8px]">
        {/* Content */}
        <div className="flex items-center justify-between bg-blue1 px-[12px] py-[8px]">
          <div className="flex items-center gap-[8px]">
            <div className="text-xs font-normal">
              <span className="text-base font-medium">300</span> điểm
            </div>
            <div className="relative flex h-[14px] w-[38px] items-center justify-center overflow-hidden rounded-[12px] bg-blue5">
              <div className="z-[10] text-[8px] font-medium text-white">
                Member
              </div>
            </div>
          </div>
          {onViewInfo ? (
            <div
              className="flex h-[18px] w-[100px] items-center justify-center rounded-[24px] bg-yellow6"
              onClick={onViewInfo}
            >
              <div className="text-2xs font-normal text-white">
                Xem quyền lợi hạng
              </div>
            </div>
          ) : null}
        </div>
        {/* Progress */}
        <div className="z-10 flex flex-col gap-[8px] px-[12px]">
          <Progress
            size={{ height: 4 }}
            percent={50}
            showInfo={false}
            strokeColor="#8FC1FF"
            trailColor="#F2F2F2"
            className="leading-[0]"
          />
          <div className="flex justify-between">
            <div className="text-2xs font-semibold text-gray8">300 điểm</div>
            <div className="text-2xs font-semibold text-gray6">500 điểm</div>
          </div>
        </div>
      </div>
      <Divider dashed className="m-0 border-gray2" />
      {/* Footer */}
      <div className="z-10 flex flex-col items-center justify-between bg-white px-[16px] pb-[6px] pt-[4px]">
        <div className="text-center text-2xs font-normal text-gray6">
          Đưa mã này cho nhân viên
        </div>
        <div className="h-[48.79px] w-[200px]">
          <img src={BarCode} alt="" className="size-full" />
        </div>
      </div>
    </div>
  );
};

const CardSilver: FC<{ onViewInfo?: any }> = ({ onViewInfo }) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px]"
      style={{ boxShadow: "0px 1px 4px 0px #D1DDE3A6" }}
    >
      {/* Body */}
      <div className="relative flex flex-col gap-[8px] bg-white pb-[8px]">
        {/* Content */}
        <div
          className="flex items-center justify-between px-[12px] py-[8px]"
          style={{
            background:
              "linear-gradient(90deg, #CBCBCB 5.48%, #DEDEDE 10.63%, #C4C4C4 49.52%, #E8E8E8 100%)",
          }}
        >
          <div className="flex items-center gap-[8px]">
            <div className="text-xs font-normal">
              <span className="text-base font-medium">300</span> điểm
            </div>
            <div className="relative flex h-[14px] w-[28px] items-center justify-center overflow-hidden rounded-[12px]">
              <img src={SilverBg} alt="" className="absolute z-[0] size-full" />
              <div className="z-[10] text-[8px] font-medium text-white">
                Silver
              </div>
            </div>
          </div>
          {onViewInfo ? (
            <div
              className="flex h-[18px] w-[100px] items-center justify-center rounded-[24px] bg-yellow6"
              onClick={onViewInfo}
            >
              <div className="text-2xs font-normal text-white">
                Xem quyền lợi hạng
              </div>
            </div>
          ) : null}
        </div>
        {/* Progress */}
        <div className="z-10 flex flex-col gap-[8px] px-[12px]">
          <Progress
            size={{ height: 4 }}
            percent={50}
            showInfo={false}
            strokeColor="#767A7F"
            trailColor="#F2F2F2"
            className="leading-[0]"
          />
          <div className="flex justify-between">
            <div className="text-2xs font-semibold text-gray8">300 điểm</div>
            <div className="text-2xs font-semibold text-gray6">500 điểm</div>
          </div>
        </div>
      </div>
      <Divider dashed className="m-0 border-gray2" />
      {/* Footer */}
      <div className="z-10 flex flex-col items-center justify-between bg-white px-[16px] pb-[6px] pt-[4px]">
        <div className="text-center text-2xs font-normal text-gray6">
          Đưa mã này cho nhân viên
        </div>
        <div className="h-[48.79px] w-[200px]">
          <img src={BarCode} alt="" className="size-full" />
        </div>
      </div>
    </div>
  );
};

const CardGold: FC<{ onViewInfo?: any }> = ({ onViewInfo }) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px]"
      style={{ boxShadow: "0px 1px 4px 0px #D1DDE3A6" }}
    >
      {/* Body */}
      <div className="relative flex flex-col gap-[8px] bg-white pb-[8px]">
        {/* Content */}
        <div className="flex items-center justify-between bg-yellow3 px-[12px] py-[8px]">
          <div className="flex items-center gap-[8px]">
            <div className="text-xs font-normal">
              <span className="text-base font-medium">300</span> điểm
            </div>
            <div className="relative flex h-[14px] w-[26px] items-center justify-center overflow-hidden rounded-[12px]">
              <img src={GoldBg} alt="" className="absolute z-[0] size-full" />
              <div className="z-[10] text-[8px] font-medium text-white">
                Gold
              </div>
            </div>
          </div>
          {onViewInfo ? (
            <div
              className="flex h-[18px] w-[100px] items-center justify-center rounded-[24px] bg-yellow6"
              onClick={onViewInfo}
            >
              <div className="text-2xs font-normal text-white">
                Xem quyền lợi hạng
              </div>
            </div>
          ) : null}
        </div>
        {/* Progress */}
        <div className="z-10 flex flex-col gap-[8px] px-[12px]">
          <Progress
            size={{ height: 4 }}
            percent={50}
            showInfo={false}
            strokeColor="#E8BA02"
            trailColor="#F2F2F2"
            className="leading-[0]"
          />
          <div className="flex justify-between">
            <div className="text-2xs font-semibold text-gray8">300 điểm</div>
            <div className="text-2xs font-semibold text-gray6">500 điểm</div>
          </div>
        </div>
      </div>
      <Divider dashed className="m-0 border-gray2" />
      {/* Footer */}
      <div className="z-10 flex flex-col items-center justify-between bg-white px-[16px] pb-[6px] pt-[4px]">
        <div className="text-center text-2xs font-normal text-gray6">
          Đưa mã này cho nhân viên
        </div>
        <div className="h-[48.79px] w-[200px]">
          <img src={BarCode} alt="" className="size-full" />
        </div>
      </div>
    </div>
  );
};

const CardDiamond: FC<{ onViewInfo?: any }> = ({ onViewInfo }) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px]"
      style={{ boxShadow: "0px 1px 4px 0px #D1DDE3A6" }}
    >
      {/* Body */}
      <div className="relative flex flex-col gap-[8px] bg-white pb-[8px]">
        {/* Content */}
        <div
          className="flex items-center justify-between px-[12px] py-[8px]"
          style={{
            background:
              "linear-gradient(90deg, #414141 0%, #7A7A7A 43.75%, #A3A3A3 53.85%, #898A8C 60.58%, #76787B 100%)",
          }}
        >
          <div className="flex items-center gap-[8px]">
            <div className="text-xs font-normal text-white">
              <span className="text-base font-medium">300</span> điểm
            </div>
            <div className="relative flex h-[14px] w-[41px] items-center justify-center overflow-hidden rounded-[12px]">
              <img
                src={DiamondBg}
                alt=""
                className="absolute z-[0] size-full"
              />
              <div className="z-[10] text-[8px] font-medium text-white">
                Diamond
              </div>
            </div>
          </div>
          {onViewInfo ? (
            <div
              className="flex h-[18px] w-[100px] items-center justify-center rounded-[24px] bg-yellow6"
              onClick={onViewInfo}
            >
              <div className="text-2xs font-normal text-white">
                Xem quyền lợi hạng
              </div>
            </div>
          ) : null}
        </div>
        {/* Progress */}
        <div className="z-10 flex flex-col gap-[8px] px-[12px]">
          <Progress
            size={{ height: 4 }}
            percent={50}
            showInfo={false}
            strokeColor="#36383A"
            trailColor="#F2F2F2"
            className="leading-[0]"
          />
          <div className="flex justify-between">
            <div className="text-2xs font-semibold text-gray8">300 điểm</div>
            <div className="text-2xs font-semibold text-gray6">500 điểm</div>
          </div>
        </div>
      </div>
      <Divider dashed className="m-0 border-gray2" />
      {/* Footer */}
      <div className="z-10 flex flex-col items-center justify-between bg-white px-[16px] pb-[6px] pt-[4px]">
        <div className="text-center text-2xs font-normal text-gray6">
          Đưa mã này cho nhân viên
        </div>
        <div className="h-[48.79px] w-[200px]">
          <img src={BarCode} alt="" className="size-full" />
        </div>
      </div>
    </div>
  );
};
export const MemberCard: FC<MemberCardProps> = ({ type, onViewInfo }) => {
  switch (type) {
    case "member":
      return <CardMember onViewInfo={onViewInfo} />;

    case "silver":
      return <CardSilver onViewInfo={onViewInfo} />;

    case "gold":
      return <CardGold onViewInfo={onViewInfo} />;

    case "diamond":
      return <CardDiamond onViewInfo={onViewInfo} />;

    default:
      return <CardGold />;
  }
};

export type MemberCardProps = {
  type: "member" | "silver" | "gold" | "diamond";
  onViewInfo?: any;
};
