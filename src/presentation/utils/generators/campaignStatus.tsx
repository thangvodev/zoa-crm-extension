import { Tag } from "../../components/common/tag";

export function campaignStatusGenerator({ statusId }: { statusId: string }) {
  const statusMap = {
    "0": (
      <Tag
        color="#767A7F"
        className="flex h-[28px] w-fit items-center justify-center rounded-[24px] border-none !bg-gray1 px-[8px] text-xs font-normal"
      >
        Draft
      </Tag>
    ),
    "1": (
      <Tag
        color="#E8BA02"
        className="flex h-[28px] w-fit items-center justify-center rounded-[24px] border-none !bg-yellow1 px-[8px] text-xs font-normal"
      >
        Publish
      </Tag>
    ),
    "2": (
      <Tag
        color="#DC1F18"
        className="flex h-[28px] w-fit items-center justify-center rounded-[24px] border-none !bg-red1 px-[8px] text-xs font-normal"
      >
        Pause
      </Tag>
    ),
    "3": (
      <Tag
        color="#006AF5"
        className="flex h-[28px] w-fit items-center justify-center rounded-[24px] border-none !bg-blue1 px-[8px] text-xs font-normal"
      >
        Running
      </Tag>
    ),
    "4": (
      <Tag
        color="#34B764"
        className="flex h-[28px] w-fit items-center justify-center rounded-[24px] border-none !bg-green1 px-[8px] text-xs font-normal"
      >
        Running
      </Tag>
    ),
  };

  return statusMap[statusId as keyof typeof statusMap];
}
