import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import CompanyLogo from "../../static/images/company-logo.png";
import { Drawer } from "antd";
import CloseCrossIcon from "../icons/CloseCrossIcon";
import { Button } from "../common/button";

const VoucherInformationSheet: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Drawer
          placement="bottom"
          title={
            (
              <div className="relative">
                <div className="text-center text-lg font-medium">
                  Chi tiết ưu đãi
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
          onClose={() => {
            setVisible(false);
          }}
          mask
          destroyOnHidden
          height={"85vh"}
          className="rounded-t-[8px] bg-white"
          styles={{
            header: { padding: "16px 16px 8px", border: "none" },
            body: { padding: "12px 16px 100px" },
          }}
        >
          {/* Body */}
          <div className="flex flex-1 flex-col items-center gap-[12px] overflow-auto">
            <div className="flex flex-col gap-[8px]">
              <img
                src={CompanyLogo}
                alt=""
                className="size-[64px] rounded-[12px] object-cover"
              />
              <div className="text-sm font-normal text-gray6">Phúc Long</div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="text-base font-medium">
                Giảm 30% Phúc Long hoá đơn 50k
              </div>
              <div className="text-xs font-normal text-gray6">
                Hạn dùng: 31/10/2025
              </div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="text-sm font-medium">Điều khoản sử dụng</div>
              <div className="text-sm font-normal text-[#3D3D3D]">
                Chương trình ưu đãi: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
            </div>
          </div>
          {/* Footer button */}
          <div className="absolute inset-x-[16px] bottom-[24px]">
            <Button
              text={
                <div className="text-[15px] font-medium text-white">
                  Thu thập
                </div>
              }
              className="h-[48px] w-full flex-none rounded-[100px] bg-blueB60"
            />
          </div>
        </Drawer>,
        document.body,
      )}
    </>
  );
};

export { VoucherInformationSheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
