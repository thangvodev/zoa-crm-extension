import { Pagination, PaginationProps } from "antd";
import React, { FC } from "react";
import { Select } from "../../../common/select";

export const TablePagination: FC<Props> = (props) => {
  return (
    <div className="flex items-center justify-between pt-[10px]">
      <Pagination {...props} />
      <div className="flex items-center gap-[10px]">
        <div className="text-sm font-normal text-[#333333]">Hiển thị</div>
        <Select
          value={props.pageSize}
          options={[
            {
              value: 10,
              label: "10",
            },
            {
              value: 15,
              label: "15",
            },
            {
              value: 20,
              label: "20",
            },
          ]}
          styles={{
            root: { height: "42px", width: "70px" },
          }}
          onChange={(value) => props.onSizeChange(value)}
        />
        <div className="text-sm font-normal text-[#333333]">mục/trang</div>
      </div>
    </div>
  );
};

type Props = PaginationProps & { onSizeChange: (pageSize: number) => void };
