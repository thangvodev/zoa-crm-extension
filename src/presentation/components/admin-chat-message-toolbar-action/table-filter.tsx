import React, { FC } from "react";
import { Select } from "../common/select";
import { SearchBarNoPopup } from "../common/search-bar";
import SearchIcon from "../icons/SearchIcon";
import { FormInstance } from "antd";
import { Form } from "../common/form";

export const TableFilter: FC<Props> = ({ form, onFormFinish }) => {
  return (
    <Form
      form={form}
      className="flex items-center gap-[12px]"
      onFinish={onFormFinish}
    >
      <Form.Item name="customerGroup" noStyle>
        <Select
          placeholder="Nhóm khách hàng"
          options={[
            {
              value: "1",
              label: "Nhóm A",
            },
            {
              value: "2",
              label: "Nhóm B",
            },
          ]}
          styles={{
            root: { height: "44px", width: "168px" },
          }}
          className="customSelect"
          onSelect={() => form.submit()}
        />
      </Form.Item>
      <Form.Item name="searchString" noStyle>
        <SearchBarNoPopup
          placeholder="Tìm kiếm"
          prefix={<SearchIcon className="mx-[6px]" />}
          suffix={null}
          className="h-[44px] w-[240px] rounded-[4px]"
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
