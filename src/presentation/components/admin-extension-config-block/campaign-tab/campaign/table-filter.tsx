import React, { FC } from "react";
import { Select } from "../../../common/select";
import { SearchBarNoPopup } from "../../../common/search-bar";
import SearchIcon from "../../../icons/SearchIcon";
import { Dropdown, FormInstance, MenuProps } from "antd";
import { Form } from "../../../common/form";
import { Button } from "../../../common/button";
import FilterIcon from "../../../icons/FilterIcon";

export const TableFilter: FC<Props> = ({ form, onFormFinish }) => {
  return (
    <Form
      form={form}
      className="flex items-center gap-[12px]"
      onFinish={onFormFinish}
    >
      <Form.Item name="customerGroup" noStyle>
        <Dropdown menu={{ items }} placement="bottomLeft" trigger={["click"]}>
          <Button
            text={
              <div className="flex items-center gap-[10px]">
                <div className="text-sm font-normal text-gray8">Bộ lọc</div>
                <FilterIcon className="size-[13.37px] text-gray6" />
              </div>
            }
            className="h-[44px] flex-none rounded-[4px] border border-gray3 px-[12px]"
          />
        </Dropdown>
      </Form.Item>
      <Form.Item name="searchString" noStyle>
        <SearchBarNoPopup
          placeholder="Tìm kiếm campaign"
          prefix={<SearchIcon className="mx-[6px]" />}
          suffix={null}
          className="h-[44px] w-[320px] rounded-[4px]"
          onPressEnter={() => form.submit()}
          onClear={() => {
            form.setFieldValue("searchString", "");
            form.submit();
          }}
        />
      </Form.Item>
    </Form>
  );
};

type Props = {
  form: FormInstance;
  onFormFinish: (values: any) => void;
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
