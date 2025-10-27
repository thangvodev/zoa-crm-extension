import React, { FC, useRef } from "react";
import { Button } from "../../../common/button";
import MoreIcon from "../../../icons/MoreIcon";
import { Dropdown, MenuProps } from "antd";
import { ImportBatchPopup, ImportBatchPopupRef } from "./import-batch-popup";

export const TableAction: FC<Props> = ({ voucher }) => {
  const importBatchRef = useRef<ImportBatchPopupRef>(null);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <div>View vouchers</div>,
    },
    {
      key: "2",
      label: <div>Edit batch</div>,
    },
    {
      key: "3",
      label: <div>Import vouchers</div>,
      onClick: importBatchRef.current?.open,
    },
    {
      key: "4",
      label: <div>Duplicate this batch</div>,
    },
  ];

  return (
    <>
      <ImportBatchPopup ref={importBatchRef} />
      <Dropdown menu={{ items }} placement="bottomLeft" trigger={["click"]}>
        <Button.Icon
          icon={<MoreIcon className="size-[13.33px] text-blueB60" />}
          className="size-[36px]"
        />
      </Dropdown>
    </>
  );
};

type Props = {
  voucher: any;
};
