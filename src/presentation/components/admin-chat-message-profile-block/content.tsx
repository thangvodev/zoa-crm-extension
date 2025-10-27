import React from "react";
import { ChatTabs } from "./tabs";
import { Statistics } from "./statistics";

const Content = () => {
  return (
    <div className="flex h-[calc(100%+50px)] flex-col gap-[13px] overflow-auto bg-white px-[10px] py-[12px]">
      <Statistics />
      <ChatTabs />
    </div>
  );
};

export default Content;
