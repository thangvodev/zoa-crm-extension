import React, { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import { Modal, Upload } from "antd";
import CloseCrossIcon from "../../../icons/CloseCrossIcon";
import { Button } from "../../../common/button";
import CloudUploadIcon from "../../../icons/CloudUploadIcon";

const ImportBatchPopup = forwardRef<ImportBatchPopupRef, Props>(({}, ref) => {
  const [visible, setVisible] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
  }));

  return (
    <>
      {createPortal(
        <Modal
          title={
            (
              <div className="relative">
                <div className="text-start text-xl font-medium">
                  Import voucher
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
            body: {
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "start",
              paddingTop: "80px",
              alignItems: "center",
              flex: 1,
            },
            footer: { margin: 0 },
          }}
          footer={
            <div
              className="flex items-center justify-between px-[24px] py-[8px]"
              style={{ boxShadow: "0px -4px 24px 0px #0000001F" }}
            >
              <Button
                text={<div className="text-base font-normal">Quay lại</div>}
                className="h-[40px] flex-none rounded-[4px] border border-gray3 px-[40px]"
              />
              <Button
                text={
                  <div className="text-base font-normal text-white">
                    Hoàn thành
                  </div>
                }
                className="h-[40px] flex-none rounded-[4px] bg-blueB60 px-[40px]"
              />
            </div>
          }
        >
          <div className="text-2xl font-normal">Tải file excel lên</div>
          <div className="text-base font-normal">
            Tải template để import{" "}
            <span className="font-medium text-blue5">ở đây</span>
          </div>
          <Upload.Dragger
            maxCount={5}
            className="customSizedUploadDrag h-[160px] w-[180px]"
            multiple
          >
            <div className="flex flex-col items-center justify-center gap-[8px] rounded-[4px] px-[12px]">
              <CloudUploadIcon className="size-[40px] text-blueB60" />
              <div className="text-center text-xs font-normal text-blueB60">
                Tải ảnh lên
              </div>
            </div>
          </Upload.Dragger>
        </Modal>,
        document.body,
      )}
    </>
  );
});

ImportBatchPopup.displayName = "ImportBatchPopup";

export { ImportBatchPopup };
export type { ImportBatchPopupRef };

type Props = {};

interface ImportBatchPopupRef {
  open: () => void;
  close: () => void;
}
