import { Tag } from "../../components/common/tag";

export function voucherStatusGenerator({ statusId }: { statusId: string }) {
  const statusMap = {
    "0": (
      <Tag
        color="#DC1F18"
        className="flex h-[28px] w-fit items-center justify-center rounded-[24px] border-none !bg-red1 px-[8px] text-sm font-normal"
      >
        inactive
      </Tag>
    ),
    "1": (
      <Tag
        color="#34B764"
        className="flex h-[28px] w-fit items-center justify-center rounded-[24px] border-none !bg-green1 px-[8px] text-sm font-normal"
      >
        active
      </Tag>
    ),
  };

  return statusMap[statusId as keyof typeof statusMap];
}
