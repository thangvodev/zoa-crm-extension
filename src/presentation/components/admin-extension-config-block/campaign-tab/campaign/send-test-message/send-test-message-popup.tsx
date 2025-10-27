import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "antd";
import CloseCrossIcon from "../../../../icons/CloseCrossIcon";
import { Button } from "../../../../common/button";
import { Form } from "../../../../common/form";
import clsx from "clsx";
import { TestMessageConfigForm } from "./test-message-config-form";
import { Success } from "./success";

const SendTestingMessagePopup: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [testMessageConfigForm] = Form.useForm();

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Modal
          title={
            (
              <div className="relative">
                <div className="text-start text-xl font-medium">
                  Send testing message
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
            body: { padding: "12px 0 12px 20px", flex: 1, display: "flex" },
            footer: { margin: 0 },
          }}
          footer={
            !submitted ? (
              <div
                className={clsx(
                  "flex items-center justify-center px-[24px] py-[8px]",
                )}
                style={{ boxShadow: "0px -4px 24px 0px #0000001F" }}
              >
                <Button
                  text={
                    <div className="text-base font-medium text-white">
                      Xác nhận
                    </div>
                  }
                  className="h-[40px] w-[227px] flex-none rounded-[4px] bg-blueB60 px-[40px]"
                  onClick={() => {
                    testMessageConfigForm.submit();
                    setSubmitted(true);
                  }}
                />
              </div>
            ) : null
          }
        >
          {!submitted ? (
            <TestMessageConfigForm form={testMessageConfigForm} />
          ) : (
            <Success />
          )}
        </Modal>,
        document.body,
      )}
    </>
  );
};

export { SendTestingMessagePopup };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
