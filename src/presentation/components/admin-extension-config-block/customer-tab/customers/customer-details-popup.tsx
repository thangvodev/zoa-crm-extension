import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "antd";
import CloseCrossIcon from "../../../icons/CloseCrossIcon";
import { Button } from "../../../common/button";
import { Form } from "../../../common/form";
import { UploadImage } from "../../../common/image-upload";
import dayjs from "dayjs";
import { CustomerDetails } from "./customer-details";
import { RedemptionHistory } from "./redemption-history/redemption-history";

const CustomerDetailsPopup: FC<Props> = ({ children }) => {
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
                  Khách hàng: Nguyễn Bảo Nhi
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
          <div className="flex size-full flex-col gap-[20px]">
            <CustomerDetails />
            <RedemptionHistory />
          </div>
        </Modal>,
        document.body,
      )}
    </>
  );
};

export { CustomerDetailsPopup };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
