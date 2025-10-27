import React from "react";
import { Banner } from "./banner";
import { ConfigTabs } from "./tabs";

const Content = () => {
  return (
    <div className="flex flex-col gap-[12px] bg-white px-[20px] py-[12px]">
      <Banner />
      <ConfigTabs />
    </div>
  );
};

export default Content;
