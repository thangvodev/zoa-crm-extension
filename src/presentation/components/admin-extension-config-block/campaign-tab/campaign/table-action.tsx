import React, { FC } from "react";
import { Button } from "../../../common/button";
import MoreIcon from "../../../icons/MoreIcon";
import { Dropdown, MenuProps } from "antd";

export const TableAction: FC<Props> = ({ voucher }) => {
  const actionItems = {
    "0": itemsDraft,
    "1": itemsPublish,
    "2": itemsPause,
    "3": itemsRunning,
    "4": itemsComplete,
  };

  return (
    <Dropdown
      menu={{ items: actionItems[voucher.status] }}
      placement="bottomLeft"
      trigger={["click"]}
    >
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

const itemsDraft: MenuProps["items"] = [
  {
    key: "1",
    label: <div>Duplicate</div>,
  },
  {
    key: "2",
    label: <div>View Campaign Detail</div>,
  },
  {
    key: "3",
    label: <div>Edit Campaign</div>,
  },
  {
    key: "4",
    label: <div className="text-red6">Delete</div>,
  },
];

const itemsPublish: MenuProps["items"] = [
  {
    key: "1",
    label: <div>Duplicate</div>,
  },
  {
    key: "2",
    label: <div>View Campaign Detail</div>,
  },
  {
    key: "3",
    label: <div>Edit Campaign</div>,
  },
];

const itemsRunning: MenuProps["items"] = [
  {
    key: "1",
    label: <div>Duplicate</div>,
  },
  {
    key: "2",
    label: <div>View Campaign Detail</div>,
  },
  {
    key: "3",
    label: <div>Edit Campaign</div>,
  },
];

const itemsPause: MenuProps["items"] = [
  {
    key: "1",
    label: <div>Duplicate</div>,
  },
  {
    key: "2",
    label: <div>View Campaign Detail</div>,
  },
  {
    key: "3",
    label: <div>Edit Campaign</div>,
  },
  {
    key: "4",
    label: <div>Resume</div>,
  },
];

const itemsComplete: MenuProps["items"] = [
  {
    key: "1",
    label: <div>Duplicate</div>,
  },
  {
    key: "2",
    label: <div>View Campaign Detail</div>,
  },
];
