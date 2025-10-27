import React from "react";
import FunctionsTabImg from "../../static/images/profile-config-functions.png";

export const MainFunctions = () => {
  return (
    <div className="flex flex-col gap-[26px]">
      <div className="text-lg font-medium">Tính năng 1</div>
      <div className="text-base font-normal text-[#343434]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
      <img src={FunctionsTabImg} alt="" className="w-full" />
    </div>
  );
};
