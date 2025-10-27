import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { DatePicker, Input, Modal, SelectProps } from "antd";
import CloseCrossIcon from "../../../icons/CloseCrossIcon";
import { Button } from "../../../common/button";
import { Form } from "../../../common/form";
import CalendarIcon from "../../../icons/CalendarIcon";
import { ImageUpload, UploadImage } from "../../../common/image-upload";
import UploadIcon from "../../../icons/UploadIcon";
import dayjs from "dayjs";
import { Select } from "../../../common/select";
import { Tag } from "../../../common/tag";

const CreateGroupPopup: FC<Props> = ({ children }) => {
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
                  Tạo nhóm khách hàng mới
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
          width={"640px"}
          styles={{
            content: {
              borderRadius: 0,
              display: "flex",
              flexDirection: "column",
              padding: 0,
            },
            header: {
              margin: 0,
              padding: "12px 20px 8px",
              borderBottom: "1px solid #E9EBED",
            },
            body: { padding: "12px 20px", flex: 1, display: "flex" },
            footer: { margin: 0 },
          }}
          footer={
            <div
              className="flex items-center justify-end px-[24px] py-[8px]"
              style={{ boxShadow: "0px -4px 24px 0px #0000001F" }}
            >
              <Button
                text={
                  <div className="text-base font-medium text-white">
                    Tạo mới
                  </div>
                }
                className="h-[40px] flex-none rounded-[4px] bg-blueB60 px-[40px]"
              />
            </div>
          }
        >
          <Form
            form={form}
            className="flex flex-1 flex-col gap-[20px] pb-[200px]"
            initialValues={initialValues}
          >
            <Form.Item
              name="name"
              label="Tên nhóm khách hàng"
              layout="vertical"
              style={{ margin: 0 }}
            >
              <Input
                placeholder="Nhập thông tin"
                showCount
                maxLength={50}
                className="h-[48px]"
              />
            </Form.Item>
            <Form.Item
              name="tags"
              label="Tag"
              layout="vertical"
              style={{ margin: 0 }}
            >
              <Select
                mode="multiple"
                options={[
                  {
                    value: "1",
                    label: "new",
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
          </Form>
        </Modal>,
        document.body,
      )}
    </>
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

export { CreateGroupPopup };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
