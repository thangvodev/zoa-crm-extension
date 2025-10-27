import { FormInstance, Input } from "antd";
import React from "react";
import { Form } from "../../../../common/form";
import { Select } from "../../../../common/select";
import { Button } from "../../../../common/button";
import EditIcon from "../../../../icons/EditIcon";
import TemplateBanner from "../../../../../static/images/template-img.png";
import { EditTemplatePopup } from "../edit-template/edit-template-popup";

const VoucherConfigForm = ({ form }: Props) => {
  return (
    <div className="flex h-full gap-[20px]">
      <Form
        form={form}
        name="voucherConfigForm"
        className="flex flex-1 flex-col gap-[20px]"
      >
        {/* Voucher message */}
        <div className="flex flex-col gap-[12px]">
          <div className="text-lg font-normal">Mẫu tin nhắn gửi voucher</div>
          <Form.Item
            name="type"
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
        {/* Voucher  */}
        <div className="flex flex-col gap-[12px]">
          <div className="text-lg font-normal">Voucher</div>
          <Form.Item
            name="batchVoucher"
            label="Batch voucher"
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
              placeholder="Chọn batch voucher"
              styles={{
                root: { height: "48px" },
              }}
            />
          </Form.Item>
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

export { VoucherConfigForm };

type Props = {
  form: FormInstance;
};
