import React, { FC, useState } from "react";
import { Button } from "../../common/button";
import clsx from "clsx";
import { CampaignLibraryList } from "./campaign/list";
import { MessageTemplateList } from "./messageTemplates/list";
import ImageList from "./images/image-list";

const LibraryTab = () => {
  const [currentTab, setCurrentTab] =
    useState<keyof typeof LibraryTabs>("campaigns");

  return (
    <div className="flex h-full flex-col gap-[16px]">
      <div className="flex flex-col gap-[8px]">
        <div className="text-[19px] font-medium">Thư viện</div>
        <div className="flex items-center gap-[16px]">
          <TabButton
            tab="campaigns"
            currentTab={currentTab}
            onClick={() => setCurrentTab("campaigns")}
          />
          <TabButton
            tab="messageTemplates"
            currentTab={currentTab}
            onClick={() => setCurrentTab("messageTemplates")}
          />
          <TabButton
            tab="images"
            currentTab={currentTab}
            onClick={() => setCurrentTab("images")}
          />
        </div>
      </div>
      <div className={clsx("block", { hidden: currentTab !== "campaigns" })}>
        <CampaignLibraryList />
      </div>
      <div
        className={clsx("block", { hidden: currentTab !== "messageTemplates" })}
      >
        <MessageTemplateList />
      </div>
      <div className={clsx("block", { hidden: currentTab !== "images" })}>
        <ImageList />
      </div>
    </div>
  );
};

const TabButton: FC<{
  tab: keyof typeof LibraryTabs;
  currentTab: keyof typeof LibraryTabs;
  onClick: () => void;
}> = ({ tab, currentTab, onClick }) => {
  return (
    <Button
      text={
        <div
          className={clsx("text-sm font-medium text-gray6", {
            "!text-blueB60": currentTab === tab,
          })}
        >
          {LibraryTabs[tab].label}
        </div>
      }
      className={clsx(
        "flex h-[40px] flex-none items-center justify-center rounded-[4px] border border-transparent bg-gray2 px-[16px]",
        { "!border-blueB60 !bg-blue1": currentTab === tab },
      )}
      onClick={onClick}
    />
  );
};

export { LibraryTab };

const LibraryTabs = {
  campaigns: {
    label: "Chiến dịch",
  },
  messageTemplates: {
    label: "Mẫu tin nhắn",
  },
  images: {
    label: "Hình ảnh",
  },
};
