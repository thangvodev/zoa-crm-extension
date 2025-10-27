import React from "react";
import TicketIcon from "../../static/icons/ticket.png";

export const Title = () => {
  return (
    <div className="flex items-center gap-[12px]">
      <img src={TicketIcon} alt="" className="size-[40px]" />
      <div className="text-sm font-normal">Giftzone Voucher</div>
    </div>
  );
};
