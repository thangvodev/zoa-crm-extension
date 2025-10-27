import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { DatePicker, Input, Modal } from "antd";
import CloseCrossIcon from "../../../icons/CloseCrossIcon";
import { Button } from "../../../common/button";
import { Form } from "../../../common/form";
import CalendarIcon from "../../../icons/CalendarIcon";
import { ImageUpload, UploadImage } from "../../../common/image-upload";
import UploadIcon from "../../../icons/UploadIcon";
import dayjs from "dayjs";

const CreateBatchPopup: FC<Props> = ({ children }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);
  const [batchImages, setBatchImages] = useState<UploadImage[]>([]);
  const [bannerImage, setBannerImage] = useState<UploadImage[]>([]);

  const initialValues = {
    name: "",
    id: "22343QERTX",
    startTime: dayjs("05:20, 14/12/25", "HH:mm[, ]DD/MM/YY"),
    endTime: dayjs("05:20, 18/12/25", "HH:mm[, ]DD/MM/YY"),
    description: "",
    policy: "",
  };

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Modal
          title={
            (
              <div className="relative">
                <div className="text-start text-xl font-medium">
                  Tạo batch voucher mới
                </div>
                <div
                  className="absolute right-[8px] top-[0] flex size-[24px] h-full items-center justify-end"
                  onClick={() => setVisible(false)}
                >
                  <CloseCrossIcon className="size-[13.2px] cursor-pointer" />
                </div>
              </div>
            ) as unknown as string
          }
          open={visible}
          closeIcon={null}
          onCancel={() => {
            setVisible(false);
          }}
          destroyOnHidden
          style={{ top: 0, padding: 0 }}
          width={"800px"}
          styles={{
            content: {
              borderRadius: 0,
              display: "flex",
              flexDirection: "column",
              padding: 0,
              minHeight: "100vh",
            },
            header: {
              margin: 0,
              padding: "8px 20px ",
              borderBottom: "1px solid #E9EBED",
            },
            body: { padding: "12px 20px", flex: 1, display: "flex" },
            footer: { margin: 0 },
          }}
          footer={
            <div
              className="flex items-center justify-between px-[24px] py-[8px]"
              style={{ boxShadow: "0px -4px 24px 0px #0000001F" }}
            >
              <Button
                text={<div className="text-base font-medium">Quay lại</div>}
                className="h-[40px] flex-none rounded-[4px] border border-gray3 px-[40px]"
              />
              <Button
                text={
                  <div className="text-base font-medium text-white">
                    Tiếp tục
                  </div>
                }
                className="h-[40px] flex-none rounded-[4px] bg-blueB60 px-[40px]"
              />
            </div>
          }
        >
          <Form
            form={form}
            className="flex flex-1 flex-col gap-[20px] pb-[40px]"
            initialValues={initialValues}
          >
            <Form.Item
              name="name"
              label="Tên batch"
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
              name="id"
              label="Batch ID"
              layout="vertical"
              style={{ margin: 0 }}
            >
              <Input disabled className="h-[48px]" />
            </Form.Item>
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
            <div className="flex w-full gap-[12px]">
              <div className="flex flex-1 flex-col gap-[8px]">
                <div className="text-sm font-normal">Batch image</div>
                <div className="text-sm font-normal text-gray6">
                  1:1 (.jpg, .jpeg), max 500kb
                </div>
                <ImageUpload
                  images={batchImages}
                  setImages={setBatchImages}
                  maxCount={1}
                  uploadButton={
                    <div className="flex h-[80px] w-[100px] flex-col items-center justify-center gap-[8px] rounded-[4px] border border-dashed border-gray3 px-[12px]">
                      <UploadIcon className="size-[16px] text-blueB60" />
                      <div className="text-center text-xs font-normal text-blueB60">
                        Tải ảnh lên
                      </div>
                    </div>
                  }
                  className="aspect-square max-h-[150px] max-w-[150px]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[8px]">
                <div className="text-sm font-normal">Top banner</div>
                <div className="text-sm font-normal text-gray6">
                  16:9, (.jpg, .jpeg), max 500kb
                </div>
                <Form.Item noStyle>
                  <ImageUpload
                    images={bannerImage}
                    setImages={setBannerImage}
                    maxCount={1}
                    uploadButton={
                      <div className="flex h-[80px] w-[138px] flex-col items-center justify-center gap-[8px] rounded-[4px] border border-dashed border-gray3 px-[12px]">
                        <UploadIcon className="size-[16px] text-blueB60" />
                        <div className="text-center text-xs font-normal text-blueB60">
                          Tải ảnh lên
                        </div>
                      </div>
                    }
                    className="max-h-[150px]"
                  />
                </Form.Item>
              </div>
            </div>
            <Form.Item
              name="description"
              label="Mô tả ngắn"
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
              name="policy"
              label="Diều khoản sử dụng"
              layout="vertical"
              style={{ margin: 0 }}
            >
              <Input.TextArea
                placeholder="Nhập mô tả"
                showCount
                maxLength={50}
                autoSize={{ minRows: 4, maxRows: 40 }}
              />
            </Form.Item>
          </Form>
        </Modal>,
        document.body,
      )}
    </>
  );
};

export { CreateBatchPopup };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
