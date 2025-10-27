import React from "react";
import { ListFilter } from "./filters";
import { Form } from "../../../common/form";
import ChevronIcon from "../../../icons/ChevronIcon";
import { Divider } from "antd";

const CampaignLibraryList = () => {
  const [listForm] = Form.useForm();

  function handleSearchSubmit(values: any) {
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-[12px]">
      <ListFilter form={listForm} onFormFinish={handleSearchSubmit} />
      <div className="grid size-full grid-cols-4 gap-[12px]">
        {Array.from({ length: 16 }).map((_, index) => (
          <CampaignLibraryListItem key={index} />
        ))}
      </div>
    </div>
  );
};

const CampaignLibraryListItem = () => {
  return (
    <div className="flex flex-col gap-[8px] rounded-[12px] border border-stroke1 bg-white p-[16px]">
      <div className="flex items-start gap-[8px]">
        <div className="text-lg font-medium leading-5">
          New follower welcome Message
        </div>
        <div className="flex size-[16px] items-center justify-center">
          <ChevronIcon className="size-[8px] text-slate-700" />
        </div>
      </div>
      <Divider className="m-0" />
      <div className="line-clamp-2 text-sm font-normal text-gray-500">
        Gửi voucher cho những khách hàng Follow OA lần đầu và Chưa từng mua hàng
        từ sự kiện.
      </div>
    </div>
  );
};

export { CampaignLibraryList };
