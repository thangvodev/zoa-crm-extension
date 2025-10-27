import React from "react";
import { Title } from "./title";
import { MemberCard } from "../common/member-cards";
import { VoucherTabs } from "./tabs";
import { MemberCardInformationSheet } from "./member-card-information-sheet";

const Content = () => {
  return (
    <div className="flex h-[calc(100%+50px)] flex-col gap-[12px] overflow-auto bg-white pt-[12px]">
      <Title />
      <MemberCardInformationSheet>
        {({ open }) => <MemberCard type="gold" onViewInfo={open} />}
      </MemberCardInformationSheet>
      <VoucherTabs />
    </div>
  );
};

export default Content;
