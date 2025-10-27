import React, { FC } from "react";
import { Button } from "../../../common/button";
import MoreIcon from "../../../icons/MoreIcon";
import { Dropdown, MenuProps } from "antd";

export const TableAction: FC<Props> = ({ voucher }) => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <div>Edit list name</div>,
    },
    {
      key: "2",
      label: <div>View campaigns</div>,
    },
    {
      key: "3",
      label: <div>Delete list</div>,
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomLeft" trigger={["click"]}>
      <Button.Icon
        icon={<MoreIcon className="size-[13.33px] text-blueB60" />}
        className="size-[36px]"
      />
    </Dropdown>
  );
};

type Props = {
  voucher: any;
};
