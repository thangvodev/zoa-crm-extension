import React, { FC } from "react";
import CalendarDaysIcon from "../../../icons/CalendarDaysIcon";
import FlagIcon from "../../../icons/FlagIcon";
import ListIcon from "../../../icons/ListIcon";
import VoucherIcon from "../../../icons/VoucherIcon";
import GiftIcon from "../../../icons/GiftIcon";
import { Divider } from "antd";

const CustomerDetails = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-between gap-[12px]">
        <StatisticsCard
          icon={<CalendarDaysIcon className="size-[16px] text-blueB60" />}
          title="Active days"
          value="30"
        />
        <StatisticsCard
          icon={<FlagIcon className="size-[16px] text-blueB60" />}
          title="Campaigns"
          value="5"
        />
        <StatisticsCard
          icon={<ListIcon className="size-[16px] text-blueB60" />}
          title="Lists"
          value="14"
        />
        <StatisticsCard
          icon={<VoucherIcon className="size-[16px] text-blueB60" />}
          title="Total Vouchers Issued"
          value="40"
        />
        <StatisticsCard
          icon={<GiftIcon className="size-[16px] text-blueB60" />}
          title="Redemption rate"
          value="25%"
        />
      </div>
      <div className="flex gap-[40px]">
        <div className="flex flex-1 flex-col gap-[8px]">
          <div className="text-base font-medium">Thông tin cá nhân</div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[40px]">
              <div className="w-[120px] text-[15px] font-normal">ID</div>
              <div className="text-[15px] font-normal text-gray-700">
                12435qt4t56
              </div>
            </div>
            <div className="flex gap-[40px]">
              <div className="w-[120px] text-[15px] font-normal">Location</div>
              <div className="text-[15px] font-normal text-gray-700">
                Ho Chi Minh, Viet Nam
              </div>
            </div>
            <div className="flex gap-[40px]">
              <div className="w-[120px] text-[15px] font-normal">Phone</div>
              <div className="text-[15px] font-normal text-gray-700">
                0943859485
              </div>
            </div>
            <div className="flex gap-[40px]">
              <div className="w-[120px] text-[15px] font-normal">Gender</div>
              <div className="text-[15px] font-normal text-gray-700">Nữ</div>
            </div>
            <div className="flex gap-[40px]">
              <div className="w-[120px] text-[15px] font-normal">Birthday</div>
              <div className="text-[15px] font-normal text-gray-700">
                16/04/2000
              </div>
            </div>
          </div>
        </div>
        <Divider type="vertical" className="m-0 h-[120px] self-center" />
        <div className="flex flex-1 flex-col gap-[8px]">
          <div className="text-base font-medium">Hoạt động</div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[40px]">
              <div className="w-[120px] text-[15px] font-normal">
                First active
              </div>
              <div className="text-[15px] font-normal text-gray-700">
                12:16, 24/12/202
              </div>
            </div>
            <div className="flex gap-[40px]">
              <div className="w-[120px] text-[15px] font-normal">
                Last active
              </div>
              <div className="text-[15px] font-normal text-gray-700">
                12:16, 24/12/202
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatisticsCard: FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
}> = ({ icon, title, value }) => {
  return (
    <div className="flex flex-1 flex-col gap-[8px] rounded-[8px] border border-stroke1 px-[12px] py-[10px]">
      <div className="flex items-center gap-[8px]">
        {icon}
        <div className="whitespace-nowrap text-2xs font-normal text-gray-600">
          {title}
        </div>
      </div>
      <div className="text-xl font-medium">{value}</div>
    </div>
  );
};

export { CustomerDetails };
