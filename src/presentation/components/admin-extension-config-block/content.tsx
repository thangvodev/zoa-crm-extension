import React from "react";
import { ConfigTabs } from "./tabs";

const Content = () => {
  return (
    <div className="flex h-[calc(100%+50px)] flex-col gap-[12px] overflow-auto bg-white px-[20px] py-[12px]">
      <ConfigTabs />
    </div>
  );
};

export default Content;
