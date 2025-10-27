import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "antd";
import CloseCrossIcon from "../../../icons/CloseCrossIcon";

const VoucherJsonPopup: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Modal
          title={
            (
              <div className="relative">
                <div className="text-start text-xl font-medium">Json</div>
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
              padding: "8px 16px",
              borderBottom: "1px solid #E9EBED",
            },
            body: { padding: "12px 16px ", flex: 1 },
            footer: { margin: 0 },
          }}
          footer={false}
        >
          <div className="whitespace-pre-wrap break-words text-base font-normal text-gray8">
            {`{ "status": 3, "issuedAt": "2025-07-01T09:00:00.000Z", "collectedAt": "2025-07-02T10:15:30.000Z", "activatedAt": "2025-07-02T10:15:45.000Z", "redeemedAt": null, "disabledAt": null, "importedAt": "2025-06-30T08:00:00.000Z", "value": 50000, "code": "FAKE-9X7Y-Z1A2", "hot": false, "id": 9999, "createdAt": "2025-06-30T08:00:00.500Z", "updatedAt": "2025-07-05T12:00:00.000Z", "batchVoucher": {   "termAndCondition": "-Mỗi ưu đãi áp dụng 01 lần/01 hóa đơn;\n-Ưu đãi không được quy đổi thành tiền mặt;\n-Ưu đãi không áp dụng đồng thời với chương trình khác;\n-Không áp dụng vào ngày lễ lớn;\n-Áp dụng tại hệ thống cửa hàng mẫu (trừ cửa hàng đối tác).",   "shortDescription": "Café Luna - Giảm 50K cho hoá đơn từ 200K",   "to": "2025-12-31T23:59:00",   "from": "2025-07-01T00:00:00",   "status": 1,   "batchName": "Giảm 50K cho hoá đơn từ 200K - Café Luna",   "id": 500,   "createdAt": "2025-06-29T14:30:00.000Z",   "updatedAt": "2025-07-01T09:00:00.000Z",   "workspace": {     "status": 1,     "IsDefault": true,     "name": "Workspace Demo",     "description": "Workspace dùng cho demo và test",     "id": 42,     "createdAt": "2025-06-01T07:00:00.000Z",     "updatedAt": "2025-06-15T10:00:00.000Z",     "logo": {       "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",       "path": "https://example.com/files/demo/logo.png"     }   },   "image": {     "id": "11111111-2222-3333-4444-555555555555",     "path": "https://example.com/files/demo/voucher.jpg"   } }}`}
          </div>
        </Modal>,
        document.body,
      )}
    </>
  );
};

export { VoucherJsonPopup };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
