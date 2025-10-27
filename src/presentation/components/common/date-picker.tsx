import React, { FC } from "react";
import Picker, { PickerProps } from "zmp-ui/picker";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

export const DatePicker: FC<TDatePickerProps> = ({
  value,
  onChange,
  formatPickedValueDisplay,
  suffix,
  ...props
}) => {
  const reformatDayjsToPickerInput = (time: Dayjs = dayjs()) => {
    return {
      date: time.format("DD/MM/YYYY"),
      hour: time.get("hour"),
      minute: time.get("minute"),
    };
  };

  const reformatPickerOutputToDayjs = (formattedTime): Dayjs => {
    const getValue = (key: string) => formattedTime[key]?.value;

    return dayjs(getValue("date"), "DD/MM/YYYY")
      .hour(getValue("hour") || 0)
      .minute(getValue("minute") || 0);
  };

  return (
    <Picker
      value={reformatDayjsToPickerInput(value)}
      onChange={(e) => {
        onChange(reformatPickerOutputToDayjs(e));
      }}
      formatPickedValueDisplay={(e) => {
        const parseDate = reformatPickerOutputToDayjs(e);
        return formatPickedValueDisplay?.(parseDate) || parseDate.format();
      }}
      suffix={<div className="mr-[10px]">{suffix}</div>}
      data={[
        {
          name: "date",
          options: virtualDays,
        },
        {
          name: "hour",
          options: virtualHours,
        },
        {
          name: "minute",
          options: virtualMinutes,
        },
      ]}
      {...props}
    />
  );
};

const weekdays = ["CN", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7"];

const virtualDays = Array.from({ length: 100 }).map((_, index) => {
  const currentDate = dayjs().add(index, "day");
  return {
    displayName: `${weekdays[currentDate.day()]}, ${currentDate.format("DD [th]M")}`,
    value: currentDate.format("DD/MM/YYYY"),
  };
});

const virtualHours = Array.from({ length: 25 }, (_, i) =>
  i.toString().padStart(2, "0"),
).map((hour, index) => ({
  displayName: hour,
  value: index,
}));

const virtualMinutes = Array.from({ length: 61 }, (_, i) =>
  i.toString().padStart(2, "0"),
).map((hour, index) => ({
  displayName: hour,
  value: index,
}));

type TDatePickerProps = Omit<
  PickerProps,
  "data" | "formatPickedValueDisplay"
> & {
  value?: Dayjs;
  onChange?: any;
  formatPickedValueDisplay?: (value: Dayjs) => string;
};
