import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Divider, Modal } from "antd";
import CloseCrossIcon from "../../icons/CloseCrossIcon";
import iPosLogo from "../../../static/images/iPos-logo.png";

const IntegrationInfoPopup: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Modal
          title={
            (
              <div className="relative">
                <div className="text-start text-xl font-medium">
                  Thông tin hướng dẫn tích hợp
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
          style={{ top: 0, padding: 0 }}
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
            body: { padding: "24px 16px ", flex: 1 },
            footer: { margin: 0 },
          }}
          footer={false}
        >
          <div className="flex flex-col gap-[24px]">
            <div className="flex items-center gap-[8px]">
              <img src={iPosLogo} alt="" className="size-[36px] object-cover" />
              <div className="flex flex-col gap-[4px]">
                <div className="text-lg font-normal">iPOS</div>
                <div className="text-sm font-normal text-gray6">
                  Đồng bộ thông tin từ nền tảng iPOS.
                </div>
              </div>
            </div>
            <Divider className="m-0" />
            <div className="flex flex-col gap-[8px]">
              <div className="text-lg font-medium">Tích hợp IPOS</div>
              <div className="whitespace-pre-wrap break-words text-sm font-normal">
                {`Trước tiên, bạn cần yêu cầu IPOS thêm LadiPage thành đối tác trên tài khoản IPOS của bạn. Các bước làm như sau:

Gửi email tới support@ipos.vn với nội dung như sau:

Thân gửi quý đối tác, 

<<Tên thương hiệu>> xác nhận cho phép Automation  nhận các sự kiện liên quan đến dữ liệu của <<Tên thương hiệu>> trên IPOS thông qua webhook: https://api.service.ladiflow.com/1.0/webhook/ipos

Quý đối tác vui lòng hỗ trợ <<tên thương hiệu>> triển khai setup.

Trân trọng cảm ơn!

Chờ bên IPOS thiết lập xong và đội ngũ Automation xác nhận IPOS đã thiết lập thành công.

Sau khi IPOS đã cho phép Automation  nhận dữ liệu từ thương hiệu của bạn. Bạn tìm ứng dụng IPOS trên danh sách thư viện tích hợp.


Chọn Thêm liên kết.


Nhập ID thương hiệu và nhập tên tích hợp.
Trong trường hợp không biết ID thương hiệu, đội ngũ LadiFlow sẽ gửi lại ID thương hiệu cho bạn.


Bật Tự động đồng bộ CTKM từ CRM IPOS thì các Chương trình khuyến mại phát hành trên kênh đối tác LadiPage sẽ tự động được tạo trên tài khoản LadiFlow của bạn.

Chọn Lưu liên kết để lưu lại.

Hiện tại hệ thống không giới hạn số tích hợp IPOS.

Lưu ý: Mỗi thương hiệu chỉ được tích hợp với 1 tài khoản Automation.

Lưu dữ liệu từ IPOS vào trường tùy chỉnh
Các mã trường tùy chỉnh dưới đây, nếu bạn cần dữ liệu nào hãy tạo trường tùy chỉnh tương ứng vào tài khoản. Hệ thống sẽ tự động lưu dữ liệu vào các trường dữ liệu này.

Mã trường
Loại dữ liệu
Mô tả
last_pos_name

Dạng văn bản

 Cửa hàng mua lần cuối

last_point

Dạng số

Số điểm tích lũy của đơn hàng cuối cùng`}
              </div>
            </div>
          </div>
        </Modal>,
        document.body,
      )}
    </>
  );
};

export { IntegrationInfoPopup };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
