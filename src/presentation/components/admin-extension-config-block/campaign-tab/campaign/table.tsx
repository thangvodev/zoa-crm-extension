import React, { useState } from "react";
import { TableFilter } from "./table-filter";
import { TableColumnsType } from "antd";
import { Form } from "../../../common/form";
import { usePagination } from "../../../../hooks/usePagination";
import { TableAction } from "./table-action";
import VoucherImg from "../../../../static/images/voucher.png";
import Table from "../../../common/table";
import { TablePagination } from "./table-pagination";
import { Button } from "../../../common/button";
import AddCircleIcon from "../../../icons/AddCircleIcon";
import { CreateCampaignPopup } from "./create-campaign/create-campaign-popup";
import { campaignStatusGenerator } from "../../../../utils/generators/campaignStatus";

export const CampaignTable = () => {
  const [tableForm] = Form.useForm();
  const { currentPage, currentPageSize, setPageSize, goToPage } =
    usePagination();
  const [searchString, setSearchString] = useState<string>();
  const [filterOptions, setFilterOptions] = useState<any>();

  const initialValuesFilter = {
    searchString: "",
    filterOptions: null,
  };

  const handleSearchSubmit = ({
    searchString,
    filterOptions,
  }: typeof initialValuesFilter) => {
    goToPage(1);
    setSearchString(searchString);
    setFilterOptions(filterOptions ?? {});
  };

  return (
    <div className="flex h-full flex-col gap-[16px]">
      <div className="flex h-[40px] items-center justify-between">
        <div className="text-[19px] font-medium">Danh sách campaign</div>
        <CreateCampaignPopup>
          {({ open }) => (
            <Button
              text={
                <div className="flex items-center gap-[10px]">
                  <div className="text-sm font-medium text-blueB60">
                    Tạo campaign
                  </div>
                  <AddCircleIcon className="size-[16.67px] text-blueB60" />
                </div>
              }
              className="h-full flex-none rounded-[4px] border border-blueB60 px-[16px]"
              onClick={open}
            />
          )}
        </CreateCampaignPopup>
      </div>
      <div className="flex h-full flex-col gap-[12px]">
        <TableFilter form={tableForm} onFormFinish={handleSearchSubmit} />
        <Table
          fontSize={12}
          columns={tableColumns}
          dataSource={data.vouchers}
          rowKey={(record) => record.item.id}
          loading={false}
          pagination={{
            position: ["none", "none"],
            total: data.total,
            pageSize: currentPageSize,
            current: currentPage,
          }}
          scroll={{ x: "max-content", y: 430 + 40 + 8 }}
          customPaginationRender={
            <TablePagination
              showSizeChanger={false}
              total={data.total}
              pageSize={currentPageSize}
              current={currentPage}
              onChange={(pageIndex) => {
                goToPage(pageIndex);
              }}
              onSizeChange={(pageSize) => {
                setPageSize(pageSize);
              }}
            />
          }
        />
      </div>
    </div>
  );
};

const tableColumns: TableColumnsType = [
  {
    title: "ID",
    dataIndex: ["item", "id"],
    fixed: "left",
    render: (value) => (
      <div className="text-sm font-normal text-gray8">{value}</div>
    ),
  },
  {
    title: "Campaign name",
    dataIndex: ["item", "title"],
    fixed: "left",
    render: (_, { item }) => {
      return (
        <div className="flex items-center gap-[12px]">
          <img
            src={item.thumbImg}
            alt=""
            className="size-[32px] rounded-[3.56px]"
          />
          <div className="text-sm font-normal text-gray8">{item.title}</div>
        </div>
      );
    },
  },
  {
    title: "Total sent",
    dataIndex: ["item", "totalSent"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">{value}</div>
    ),
  },
  {
    title: "Status",
    dataIndex: ["item", "status"],
    render: (value) => {
      return campaignStatusGenerator({
        statusId: value,
      });
    },
  },
  {
    title: "Success",
    dataIndex: ["item", "totalSuccess"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">{value}</div>
    ),
  },
  {
    title: "Fail",
    dataIndex: ["item", "totalFail"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">{value}</div>
    ),
  },
  {
    title: "Open rate",
    dataIndex: ["item", "openRate"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">{value}</div>
    ),
  },
  {
    title: "Click (CTA) rate",
    dataIndex: ["item", "cta"],
    render: (value) => (
      <div className="text-sm font-normal text-gray8">{value}</div>
    ),
  },
  {
    title: "",
    key: "actions",

    width: "5%",
    render: (_, { item }) => <TableAction voucher={item} />,
  },
];

const data = {
  vouchers: Array.from({ length: 100 }).map((_, index) => ({
    item: {
      id: index,
      thumbImg: VoucherImg,
      title: "Giảm 40% cho khách hàng mới",
      totalSent: 1400,
      status: `${index % 5}`,
      totalSuccess: 1400,
      totalFail: 1400,
      openRate: 1400,
      cta: 1400,
    },
  })),
  total: 100,
};
