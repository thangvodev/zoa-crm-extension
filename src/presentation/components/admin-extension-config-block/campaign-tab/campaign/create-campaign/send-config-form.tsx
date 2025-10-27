import { DatePicker, FormInstance, Input, SelectProps } from "antd";
import React from "react";
import { Form } from "../../../../common/form";
import { Select } from "../../../../common/select";
import { Button } from "../../../../common/button";
import EditIcon from "../../../../icons/EditIcon";
import TemplateBanner from "../../../../../static/images/template-img.png";
import CalendarIcon from "../../../../icons/CalendarIcon";
import dayjs from "dayjs";
import { Tag } from "../../../../common/tag";
import { EditTemplatePopup } from "../edit-template/edit-template-popup";

const SendConfigForm = ({ form }: Props) => {
  const initialValues = {
    whitelist: ["1", "2"],
    blacklist: ["2"],
    startTime: dayjs("05:20, 14/12/25", "HH:mm[, ]DD/MM/YY"),
    endTime: dayjs("05:20, 18/12/25", "HH:mm[, ]DD/MM/YY"),
  };

  return (
    <div className="flex h-full gap-[20px]">
      <Form
        form={form}
        name="sendConfigForm"
        className="flex flex-1 flex-col gap-[20px]"
        initialValues={initialValues}
      >
        {/* Voucher message */}
        <div className="flex flex-col gap-[12px]">
          <div className="text-lg font-normal">
            Gửi đến danh sách khách hàng
          </div>
          <Form.Item
            name="whitelist"
            label="Chọn gửi đến List"
            layout="vertical"
            style={{ margin: 0 }}
          >
            <Select
              mode="multiple"
              options={[
                {
                  value: "1",
                  label: "VIP",
                },
                {
                  value: "2",
                  label: "Sinh nhật",
                },
              ]}
              placeholder="Chọn thông tin"
              styles={{
                root: { height: "48px" },
              }}
              className="customSelect"
              tagRender={tagRender}
            />
          </Form.Item>
          <Form.Item
            name="blacklist"
            label="Không gửi đến List"
            layout="vertical"
            style={{ margin: 0 }}
          >
            <Select
              mode="multiple"
              options={[
                {
                  value: "1",
                  label: "VIP",
                },
                {
                  value: "2",
                  label: "new",
                },
              ]}
              placeholder="Chọn thông tin"
              styles={{
                root: { height: "48px" },
              }}
              className="customSelect"
              tagRender={tagRender}
            />
          </Form.Item>
        </div>
        {/* Voucher  */}
        <div className="flex flex-col gap-[12px]">
          <div className="text-lg font-normal">Thời gian gửi</div>
          <div className="flex w-full gap-[12px]">
            <Form.Item
              name="startTime"
              label="Thời gian bắt đầu"
              layout="vertical"
              style={{ margin: 0, flex: 1 }}
            >
              <DatePicker
                placeholder="Start"
                className="h-[48px] w-full"
                format="HH:mm[, ]DD/MM/YY"
                showTime
                suffixIcon={
                  <CalendarIcon className="size-[16.67px] text-gray5" />
                }
              />
            </Form.Item>
            <Form.Item
              name="endTime"
              label="Thời gian kết thúc"
              layout="vertical"
              style={{ margin: 0, flex: 1 }}
            >
              <DatePicker
                placeholder="End"
                className="h-[48px] w-full"
                format="HH:mm[, ]DD/MM/YY"
                showTime
                suffixIcon={
                  <CalendarIcon className="size-[16.67px] text-gray5" />
                }
              />
            </Form.Item>
          </div>
        </div>
      </Form>
      <PreviewTemplate />
    </div>
  );
};

const PreviewTemplate = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex h-[58px] items-center justify-between border-[0.81px] border-stroke1 px-[16px]">
        <div className="text-sm font-medium text-slate-800">Xem trước mẫu</div>
        <EditTemplatePopup>
          {({ open }) => (
            <Button
              text={
                <div className="flex items-center justify-center gap-[9.67px]">
                  <div className="text-xs font-normal text-indigo-600">
                    Edit
                  </div>
                  <EditIcon className="size-[16.11px] text-blue-600" />
                </div>
              }
              className="flex h-[29px] flex-none items-center justify-center rounded-[6.44px] bg-violet-50 px-[8px]"
              onClick={open}
            />
          )}
        </EditTemplatePopup>
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

const tagRender: SelectProps["tagRender"] = ({ label, closable, onClose }) => {
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      closable={closable}
      onMouseDown={onPreventMouseDown}
      onClose={onClose}
      className="flex h-[24px] w-fit items-center justify-center rounded-[4px] border border-blue5 !bg-[#EBF4FF99] px-[6px] text-sm font-normal !text-gray8"
    >
      {label}
    </Tag>
  );
};

export { SendConfigForm };

type Props = {
  form: FormInstance;
};
