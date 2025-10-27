import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "antd";
import CloseCrossIcon from "../../../../icons/CloseCrossIcon";
import { Button } from "../../../../common/button";
import { Form } from "../../../../common/form";
import { GeneralInformationForm } from "./general-information-form";
import { VoucherConfigForm } from "./voucher-config-form";
import { Success } from "./success";
import { Steps } from "../../../../common/steps";
import CheckmarkIcon from "../../../../../static/icons/checkmark.png";
import clsx from "clsx";
import { SendConfigForm } from "./send-config-form";

const CreateCampaignPopup: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [currentForm, setCurrentForm] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const [generalInformationForm] = Form.useForm();
  const [voucherConfigForm] = Form.useForm();
  const [sendConfigForm] = Form.useForm();

  const goNext = () => {
    setCurrentForm((prev) => prev + 1);
  };

  const onChange = (clickedIndex: number) => {
    if (!isFinished && clickedIndex > currentForm) {
      return;
    }
    setCurrentForm(clickedIndex);
  };

  const steps = [
    {
      title: <div className="text-xl font-normal">Thông tin chung</div>,
      content: <GeneralInformationForm form={generalInformationForm} />,
    },
    {
      title: <div className="text-xl font-normal">Thiết lập voucher</div>,
      content: <VoucherConfigForm form={voucherConfigForm} />,
    },
    {
      title: <div className="text-xl font-normal">Gửi</div>,
      content: <SendConfigForm form={sendConfigForm} />,
    },
    {
      title: null,
      content: <Success />,
    },
  ];

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Modal
          title={
            (
              <div className="relative">
                <div className="text-start text-xl font-medium">
                  Tạo campaign mới
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
              className={clsx(
                "flex items-center justify-between px-[24px] py-[8px]",
              )}
              style={{ boxShadow: "0px -4px 24px 0px #0000001F" }}
            >
              <Button
                text={<div className="text-base font-medium">Quay lại</div>}
                className="h-[40px] flex-none rounded-[4px] border border-gray3 px-[40px]"
                onClick={() => setCurrentForm((prev) => Math.max(prev - 1, 0))}
                disabled={currentForm === 0}
              />
              {currentForm === 0 && (
                <Button
                  text={
                    <div className="text-base font-medium text-white">
                      Tiếp tục
                    </div>
                  }
                  className="h-[40px] flex-none rounded-[4px] bg-blueB60 px-[40px]"
                  onClick={() => {
                    generalInformationForm.submit();
                  }}
                />
              )}
              {currentForm === 1 && (
                <Button
                  text={
                    <div className="text-base font-medium text-white">
                      Tiếp tục
                    </div>
                  }
                  className="h-[40px] flex-none rounded-[4px] bg-blueB60 px-[40px]"
                  onClick={() => {
                    voucherConfigForm.submit();
                  }}
                />
              )}
              {currentForm === 2 && (
                <Button
                  text={
                    <div className="text-base font-medium text-white">
                      Tiếp tục
                    </div>
                  }
                  className="h-[40px] flex-none rounded-[4px] bg-blueB60 px-[40px]"
                  onClick={() => {
                    sendConfigForm.submit();
                  }}
                />
              )}
            </div>
          }
        >
          <Form.Provider
            onFormFinish={(name) => {
              if (name === "generalInformationForm") {
                if (isFinished) {
                  setIsFinished(false);
                }
                goNext();
              }
              if (name === "voucherConfigForm") {
                if (isFinished) {
                  setIsFinished(false);
                }
                goNext();
              }
              if (name === "sendConfigForm") {
                goNext();
                setIsFinished(true);
              }
            }}
          >
            <div className="relative flex flex-1 flex-col gap-[20px]">
              <Steps
                onChange={onChange}
                current={currentForm}
                items={steps}
                setStatus={({ item, index }) => {
                  return isFinished
                    ? index === currentForm
                      ? "active"
                      : "completed"
                    : null;
                }}
                render={({ item, index, itemStatus }) => {
                  if (index < steps.length - 1) {
                    return (
                      <div className="flex items-center gap-[12.71px]">
                        {itemStatus === "active" ? (
                          index === steps.length - 1 ? (
                            // On last step
                            <div className="flex size-[31.79px] items-center justify-center">
                              <img
                                src={CheckmarkIcon}
                                alt="Success"
                                className="size-full"
                              />
                            </div>
                          ) : (
                            // Current step
                            <div className="flex size-[31.79px] items-center justify-center rounded-full bg-blueB60 text-base text-white">
                              {index + 1}
                            </div>
                          )
                        ) : itemStatus === "completed" ? (
                          // Completed step
                          <div className="flex size-[31.79px] items-center justify-center">
                            <img
                              src={CheckmarkIcon}
                              alt="Success"
                              className="size-full"
                            />
                          </div>
                        ) : itemStatus === "error" ? (
                          // Error step
                          <div className="flex size-[31.79px] items-center justify-center">
                            <img
                              src={CheckmarkIcon}
                              alt="Success"
                              className="size-full"
                            />
                          </div>
                        ) : (
                          <div className="flex size-[31.79px] items-center justify-center rounded-full bg-gray2 text-base text-gray-500">
                            {index + 1}
                          </div>
                        )}
                        {item.title}
                      </div>
                    );
                  }
                }}
              />
              {/* Render content for each step */}
              {steps[currentForm]?.content}
            </div>
          </Form.Provider>
        </Modal>,
        document.body,
      )}
    </>
  );
};

export { CreateCampaignPopup };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
