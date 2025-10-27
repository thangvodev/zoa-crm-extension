import { ConfigProvider, Tabs as OriginalTabs } from "antd";
import { TabsProps } from "antd/lib";
import React, { FC } from "react";

export const Tabs: FC<Props> = ({
  selectColor = "#1677ff",
  margin,
  ...rest
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemSelectedColor: selectColor,
            inkBarColor: selectColor,
            horizontalItemGutter: 0,
            horizontalItemPadding: "16px",
            margin: margin,
          },
        },
      }}
    >
      <OriginalTabs {...rest} />
    </ConfigProvider>
  );
};

type Props = {
  selectColor?: string;
  margin?: number;
} & TabsProps;
