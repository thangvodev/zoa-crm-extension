import { Card, FormInstance, Input } from "antd";
import React from "react";
import { Form } from "../../../../common/form";

const GeneralInformationForm = ({ form }: Props) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="text-lg font-normal">Thông tin chung</div>
      <Form
        form={form}
        name="generalInformationForm"
        className="flex flex-col gap-[12px]"
      >
        <Form.Item
          name="name"
          label="Tên campaign"
          layout="vertical"
          style={{ margin: 0 }}
        >
          <Input
            placeholder="Description"
            showCount
            maxLength={50}
            className="h-[48px]"
          />
        </Form.Item>
        <Form.Item
          name="description"
          label="Mô tả"
          layout="vertical"
          style={{ margin: 0 }}
        >
          <Input.TextArea
            placeholder="Nhập mô tả"
            showCount
            maxLength={50}
            autoSize={{ minRows: 4, maxRows: 20 }}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export { GeneralInformationForm };

type Props = {
  form: FormInstance;
};
