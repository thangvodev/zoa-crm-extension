import React from "react";
import iPosLogo from "../../../static/images/iPos-logo.png";
import { Button } from "../../common/button";
import SaveIcon from "../../icons/SaveIcon";
import { Form } from "../../common/form";
import { Divider, Input } from "antd";
import { Switch } from "../../common/switch";
import { IntegrationInfoPopup } from "./integration-info-popup";

export const IntegrationForm = () => {
  const [integrationForm] = Form.useForm();

  return (
    <Form
      form={integrationForm}
      className="flex max-w-[600px] flex-col gap-[24px]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <img src={iPosLogo} alt="" className="size-[36px] object-cover" />
          <div className="flex flex-col gap-[4px]">
            <div className="text-lg font-normal">iPOS</div>
            <div className="text-sm font-normal text-gray6">
              Đồng bộ thông tin từ nền tảng iPOS.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[12px]">
          <IntegrationInfoPopup>
            {({ open }) => (
              <Button
                text={
                  <div className="text-base font-normal">Xem hướng dẫn</div>
                }
                className="h-[40px] flex-none rounded-[4px] border border-gray3 px-[12px]"
                onClick={open}
              />
            )}
          </IntegrationInfoPopup>

          <Button
            text={
              <div className="flex items-center gap-[4px]">
                <div className="text-sm font-normal text-white">
                  Lưu liên kết
                </div>
                <SaveIcon className="size-[15px] text-white" />
              </div>
            }
            className="h-[40px] flex-none rounded-[4px] bg-blueB60 px-[12px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-start gap-[24px]">
          <div className="flex size-[31.79px] items-center justify-center rounded-full border border-gray3">
            <div className="text-base font-normal text-gray6">1</div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="text-base font-normal">Tên tích hợp</div>
            <div className="text-sm font-normal text-gray6">
              Đặt tên cho tích hợp của bạn dễ dàng quản lý.
            </div>
          </div>
        </div>
        <Form.Item
          label="Tên tích hợp"
          name="name"
          layout="vertical"
          style={{ margin: 0 }}
        >
          <Input placeholder="Nhập thông tin" className="h-[48px]" />
        </Form.Item>
      </div>
      <Divider className="m-0" />
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-start gap-[24px]">
          <div className="flex size-[31.79px] items-center justify-center rounded-full border border-gray3">
            <div className="text-base font-normal text-gray6">2</div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="text-base font-normal">Thiết lập tài khoản</div>
            <div className="text-sm font-normal text-gray6">
              Nhập các thông tin cần thiết để kết nối với tài khoản
            </div>
          </div>
        </div>
        <Form.Item
          label="ID thương hiệu"
          name="id"
          layout="vertical"
          style={{ margin: 0 }}
        >
          <Input placeholder="Nhập ID thương hiệu" className="h-[48px]" />
        </Form.Item>
        <Form.Item
          label="Tự động đồng bộ CTKM từ CRM IPOS"
          name="autoSync"
          style={{ margin: 0 }}
          valuePropName="checked"
        >
          <Switch color="#4F39F6" className="ml-auto" />
        </Form.Item>
      </div>
      <Divider className="m-0" />
      <Form.Item
        label="Trạng thái sử dụng"
        name="status"
        style={{ margin: 0 }}
        valuePropName="checked"
      >
        <Switch color="#4F39F6" className="ml-auto" />
      </Form.Item>
    </Form>
  );
};
