import React, { FC } from "react";

const Statistics = () => {
  return (
    <div className="flex gap-[12px]">
      <StatisticsItem
        label="Thu thập"
        value={12}
        color="#B89300"
        bgColor="#FEF9E1"
      />
      <StatisticsItem
        label="Kích hoạt"
        value={12}
        color="#006AF5"
        bgColor="#EBF4FF"
      />
      <StatisticsItem
        label="Hết hạn"
        value={2}
        color="#DC1F18"
        bgColor="#FFEBEB"
      />
    </div>
  );
};

const StatisticsItem: FC<{
  label: string;
  value: number;
  color: string;
  bgColor: string;
}> = ({ label, value, color, bgColor }) => {
  return (
    <div
      className="flex h-[34px] flex-1 items-center justify-between rounded-[4px] p-[8px]"
      style={{ backgroundColor: bgColor }}
    >
      <div className="text-2xs font-normal text-gray6">{label}</div>
      <div className="text-sm font-medium" style={{ color: color }}>
        {value}
      </div>
    </div>
  );
};

export { Statistics };
