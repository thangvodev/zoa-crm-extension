import { Tag } from "../../components/common/tag";

export function batchVoucherStatusConfigGenerator({
  statusId,
}: {
  statusId: string;
}) {
  const statusMap = {
    "0": (
      <Tag
        color="#34B764"
        className="flex h-[28px] w-fit items-center justify-center rounded-[24px] border-none !bg-green1 px-[8px] text-xs font-normal"
      >
        active
      </Tag>
    ),
    "1": (
      <Tag
        color="#E8BA02"
        className="flex h-[28px] w-fit items-center justify-center rounded-[24px] border-none !bg-yellow1 px-[8px] text-xs font-normal"
      >
        Nháp
      </Tag>
    ),

    "2": (
      <Tag
        color="#DC1F18"
        className="flex h-[28px] w-fit items-center justify-center rounded-[24px] border-none !bg-red1 px-[8px] text-xs font-normal"
      >
        Hết hạn
      </Tag>
    ),
    "3": (
      <Tag
        color="#767A7F"
        className="flex h-[28px] w-fit items-center justify-center rounded-[24px] border-none !bg-gray1 px-[8px] text-xs font-normal"
      >
        inactive
      </Tag>
    ),
  };

  return statusMap[statusId as keyof typeof statusMap];
}
