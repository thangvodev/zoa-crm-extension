import { Dropdown, FormInstance, MenuProps } from "antd";
import React, { FC } from "react";
import { Form } from "../../common/form";
import { Button } from "../../common/button";
import FilterIcon from "../../icons/FilterIcon";
import CalendarPlainIcon from "../../icons/CalendarPlainIcon";
import { DatePicker } from "../../common/date-picker";
import FilterFilledIcon from "../../icons/FilterFilledIcon";

export const Filters: FC<Props> = ({ form }) => {
  return (
    <Form form={form} className="flex gap-[12.59px]">
      <Form.Item name="filters" noStyle>
        <Dropdown menu={{ items }} placement="bottomLeft" trigger={["click"]}>
          <Button
            text={
              <div className="flex items-center gap-[10px]">
                <div className="text-base font-medium text-[#262626]">
                  Bộ lọc
                </div>
                <FilterFilledIcon className="size-[16px] text-[#202224]" />
              </div>
            }
            className="h-[43px] flex-none rounded-[6.3px] border border-[#CBD5E1] px-[16.79px]"
          />
        </Dropdown>
      </Form.Item>
      <Form.Item noStyle>
        <Button
          text={
            <div className="text-sm font-medium text-[#0F172A]">
              Reset date range
            </div>
          }
          className="h-[43px] flex-none rounded-[6.3px] border border-[#CBD5E1] px-[16.79px]"
        />
      </Form.Item>
      <Form.Item name="dateRange" noStyle>
        <DatePicker.RangePicker
          fontSize={16}
          className="flex h-[43px] w-[281px] rounded-[6.3px] border border-[#CBD5E1]"
          format="MMM DD[, ]YYYY"
          suffixIcon={
            <CalendarPlainIcon className="size-[18px] text-slate-600" />
          }
          allowClear={false}
          separator={<div className="text-base text-neutral7">-</div>}
        />
      </Form.Item>
    </Form>
  );
};

type Props = {
  form: FormInstance;
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        3rd menu item
      </a>
    ),
  },
];
