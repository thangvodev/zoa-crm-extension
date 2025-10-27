import React from "react";
import TemplateBanner from "../../../../../static/images/template-img.png";
import TestingMessageSuccess from "../../../../../static/images/testing-message-success.png";

const Success = () => {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col items-center justify-center gap-[20px]">
        <img
          src={TestingMessageSuccess}
          alt=""
          className="size-[160px] object-contain"
        />
        <div className="flex flex-col items-center gap-[12px]">
          <div className="text-2xl font-medium">Đã gửi Testing message</div>
          <div className="flex flex-col items-start gap-[12px]">
            <div className="flex justify-between gap-[22px]">
              <div className="w-[140px] text-sm font-normal">SMS message:</div>
              <div className="text-sm font-normal text-gray6">
                Mẫu 1 - Tư vấn bán hàng sự kiện
              </div>
            </div>
            <div className="flex justify-between gap-[22px]">
              <div className="w-[140px] text-sm font-normal">
                User ID: 1232536467{" "}
              </div>
              <div className="text-sm font-normal text-gray6">
                12:00:12, Sep 13, 2025
              </div>
            </div>
          </div>
        </div>
      </div>
      <PreviewTemplate />
    </div>
  );
};

const PreviewTemplate = () => {
  return (
    <div className="flex max-w-[320px] flex-1 flex-col">
      <div className="flex h-[58px] items-center justify-between border-[0.81px] border-stroke1 px-[16px]">
        <div className="text-sm font-medium text-slate-800">Xem trước mẫu</div>
      </div>
      <div className="flex flex-1 justify-center bg-slate-100 pt-[20px]">
        <div className="flex h-fit w-[257px] flex-col gap-[8.83px] overflow-hidden rounded-[10.59px] bg-white">
          <img src={TemplateBanner} alt="" className="h-[190px] object-cover" />
          <div className="p-[10.59px]">
            <div className="text-xs font-normal">
              Cảm ơn bạn đã đăng ký tham gia minigame SĂN QUÀ TẶNG MÙA HÈ đến từ
              nhãn hàng PangoCDP. Bạn hãy chia sẻ tin nhắn này đến nhiều người
              bạn nhất có thể. Link mời của Bạn: htps:/cjncjdfbv
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Success };
