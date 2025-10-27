import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import CompanyLogo from "../../static/images/company-logo.png";
import { Drawer, TabsProps } from "antd";
import CloseCrossIcon from "../icons/CloseCrossIcon";
import { Button } from "../common/button";
import { MemberCard, MemberCardProps } from "../common/member-cards";
import { Tabs } from "../common/tabs";
import { PerksList } from "./perks-list";
import { PointHistory } from "./point-history";

const MemberCardInformationSheet: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [card, setCard] = useState<MemberCardProps["type"]>("member");

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
                  Thẻ thành viên
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
            header: { padding: "16px 12px 8px", border: "none" },
            body: { padding: "12px" },
          }}
        >
          <div className="relative z-[10] flex w-full flex-col gap-[20px]">
            <MemberCard type={card} />
            <Tabs
              items={items}
              className="custom-tabs custom-tabs min-h-0 flex-1"
              margin={12}
              onChange={(key) => setCard(key as MemberCardProps["type"])}
            />
            <PointHistory />
          </div>
        </Drawer>,
        document.body,
      )}
    </>
  );
};

export { MemberCardInformationSheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

const items: TabsProps["items"] = [
  {
    key: "member",
    label: "Member",
    children: <PerksList />,
  },
  {
    key: "silver",
    label: "Silver",
    children: <PerksList />,
  },
  {
    key: "gold",
    label: "Gold",
    children: <PerksList />,
  },
  {
    key: "diamond",
    label: "Diamond",
    children: <PerksList />,
  },
];
