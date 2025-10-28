import React from "react";
import { Filters } from "./filters";
import { Form } from "../../common/form";

export const Charts = () => {
  const [filterForm] = Form.useForm();

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex justify-between">
        <div className="text-[19px] font-medium">Voucher Campaign</div>
        {/* <Filters form={filterForm} /> */}
      </div>
      <iframe
        src="https://lookerstudio.google.com/embed/reporting/cee761a4-606b-46ce-8b8a-be0af3426c81/page/CNmaF"
        height={750}
      />
    </div>
  );
};
