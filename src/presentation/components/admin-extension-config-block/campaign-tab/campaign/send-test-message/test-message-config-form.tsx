import React from "react";
import { FormInstance, Input } from "antd";
import { Form } from "../../../../common/form";
import TemplateBanner from "../../../../../static/images/template-img.png";
import { Select } from "../../../../common/select";

const TestMessageConfigForm = ({ form }: Props) => {
  const initialValues = {
    parameter: Array(2).fill(null),
  };

  function handleFinish(values: any) {
    console.log(values);
  }

  return (
    <div className="flex flex-1 gap-[20px]">
      <Form
        form={form}
        name="testMessageConfigForm"
        className="flex flex-1 flex-col gap-[20px]"
        onFinish={handleFinish}
        initialValues={initialValues}
      >
        {/* Transaction message */}
        <div className="flex flex-col gap-[12px]">
          <Form.Item
            name="userId"
            label="User ID"
            layout="vertical"
            style={{ margin: 0 }}
          >
            <Input
              placeholder="Nhập tên template"
              showCount
              maxLength={50}
              className="h-[48px]"
            />
          </Form.Item>
          <Form.Item
            name="messageType"
            label="Loại tin"
            layout="vertical"
            style={{ margin: 0 }}
          >
            <Select
              options={[
                {
                  value: 1,
                  label: "1",
                },
                {
                  value: 5,
                  label: "5",
                },
                {
                  value: 10,
                  label: "10",
                },
              ]}
              placeholder="Chọn thông tin"
              styles={{
                root: { height: "48px" },
              }}
            />
          </Form.Item>
          <Form.Item
            name="template"
            label="Mẫu tin"
            layout="vertical"
            style={{ margin: 0 }}
          >
            <Select
              options={[
                {
                  value: 1,
                  label: "1",
                },
                {
                  value: 5,
                  label: "5",
                },
                {
                  value: 10,
                  label: "10",
                },
              ]}
              placeholder="Chọn thông tin"
              styles={{
                root: { height: "48px" },
              }}
            />
          </Form.Item>
        </div>
        {/* Parameter  */}
        <div className="flex flex-col gap-[12px]">
          <div className="text-lg font-normal">Danh sách parameter</div>
          <Form.List name="parameter">
            {(fields, { add, remove }) => (
              <div className="flex flex-col gap-[12px]">
                {fields.map((field) => (
                  <div
                    key={field.key}
                    className="flex items-center justify-between gap-[12px]"
                  >
                    <Form.Item
                      label="Tiêu đề"
                      name={[field.name, "title"]}
                      layout="vertical"
                      style={{ margin: 0 }}
                    >
                      <Input placeholder="Nhập title" className="h-[48px]" />
                    </Form.Item>
                    <Form.Item
                      label="Nội dung"
                      name={[field.name, "description"]}
                      layout="vertical"
                      style={{ margin: 0 }}
                    >
                      <Input placeholder="Nhập nội dung" className="h-[48px]" />
                    </Form.Item>
                  </div>
                ))}
              </div>
            )}
          </Form.List>
        </div>
      </Form>
      <PreviewTemplate />
    </div>
  );
};

const PreviewTemplate = () => {
  return (
    <div className="flex max-w-[320px] flex-1 flex-col">
      <div className="flex h-[58px] items-center justify-between border-[0.81px] border-stroke1 px-[16px]">
        <div className="text-sm font-medium text-slate-800">Xem trước mẫu</div>
      </div>
      <div className="flex flex-1 justify-center bg-slate-100 pt-[20px]">
        <div className="flex h-fit w-[257px] flex-col gap-[8.83px] overflow-hidden rounded-[10.59px] bg-white">
          <img src={TemplateBanner} alt="" className="h-[190px] object-cover" />
          <div className="p-[10.59px]">
            <div className="text-xs font-normal">
              Cảm ơn bạn đã đăng ký tham gia minigame SĂN QUÀ TẶNG MÙA HÈ đến từ
              nhãn hàng PangoCDP. Bạn hãy chia sẻ tin nhắn này đến nhiều người
              bạn nhất có thể. Link mời của Bạn: htps:/cjncjdfbv
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TestMessageConfigForm };

type Props = {
  form: FormInstance;
};
