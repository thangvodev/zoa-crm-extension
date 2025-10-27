import React from "react";
import { ListFilter } from "./filters";
import { Form } from "../../../common/form";
import ChevronIcon from "../../../icons/ChevronIcon";
import { Divider } from "antd";
import PhoneIcon from "../../../icons/PhoneIcon";
import { Tag } from "../../../common/tag";

const MessageTemplateList = () => {
  const [listForm] = Form.useForm();

  function handleSearchSubmit(values: any) {
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-[12px]">
      <ListFilter form={listForm} onFormFinish={handleSearchSubmit} />
      <div className="grid size-full grid-cols-4 gap-[12px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <MessageTemplateListItem key={index} />
        ))}
      </div>
    </div>
  );
};

const MessageTemplateListItem = () => {
  return (
    <div className="flex flex-col gap-[8px] rounded-[12px] border border-stroke1 bg-white p-[16px]">
      <div className="flex flex-col gap-[8px]">
        <div className="flex items-start gap-[8px]">
          <div className="flex size-[16px] items-center justify-center">
            <PhoneIcon className="size-[13px] text-slate-700" />
          </div>
          <div className="text-lg font-medium leading-5">
            New follower welcome Message
          </div>
          <div className="flex size-[16px] items-center justify-center">
            <ChevronIcon className="size-[8px] text-slate-700" />
          </div>
        </div>
        <Tag className="flex h-[24px] w-fit items-center justify-center rounded-full border !border-[#E6E6E6] !bg-[#FEFCE8] px-[12px] text-sm font-normal !text-[#CA8A04]">
          Tin tư vấn
        </Tag>
      </div>
      <Divider className="m-0" />
      <div className="line-clamp-2 text-sm font-normal text-gray-500">
        Gửi voucher cho những khách hàng Follow OA lần đầu và Chưa từng mua hàng
        từ sự kiện.
      </div>
      <div className="text-sm font-normal text-slate-400">September 8,2025</div>
    </div>
  );
};

export { MessageTemplateList };
